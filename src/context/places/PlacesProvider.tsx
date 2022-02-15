import { PlacesContext } from './PlacesContext'
import { useEffect, useReducer } from 'react'
import { placesReducer } from './placesReducer'
import { getUserLocation } from '../../helpers/getUserLocation'
import { searchApi } from "../../apis"
import { PlacesResponse, Feature } from "../../interfaces/places"

export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
  isLoadingPlaces: boolean
  places: Feature[];
}

const INITIAL__STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL__STATE)

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: 'setUserLocation', payload: lngLat }),
    )
  }, [])

  const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: "setPlaces", payload: [] })
      return [];
    }
    if (!state.userLocation) throw Error("No hay ubicacion ")

    dispatch({ type: "setLoadingPlaces" })

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(",")
      }
    });

    dispatch({ type: "setPlaces", payload: resp.data.features })
    return resp.data.features
  }

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        /* Methods */
        searchPlacesByTerm
      }}
    >
      {children}
    </PlacesContext.Provider>
  )
}
