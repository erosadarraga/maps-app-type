import { PlacesContext } from './PlacesContext'

export interface PlaceState {
  isLoading: boolean
  userLocation?: [number, number]
}

const INITIAL__STATE: PlaceState = {
  isLoading: true,
  userLocation: undefined,
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <PlacesContext.Provider
      value={{
        isLoading: true,
        userLocation: undefined,
      }}
    >
      {children}
    </PlacesContext.Provider>
  )
}
