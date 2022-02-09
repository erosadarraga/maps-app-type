import {createContext } from "react"



export interface PlacesContexProps{
    isLoading:boolean;
    userLocation?:[number,number];
}


export const PlacesContext = createContext<PlacesContexProps>({} as PlacesContexProps)