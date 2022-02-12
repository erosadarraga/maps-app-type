import { PlacesContext } from './PlacesContext'
import { useEffect, useReducer } from 'react'
import { placesReducer } from './placesReducer'
import { getUserLocation } from '../../helpers/getUserLocation'

export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
}

const INITIAL__STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
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

  return (
    <PlacesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </PlacesContext.Provider>
  )
}
