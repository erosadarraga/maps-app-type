import axios from "axios";

const searchApi = axios.create({
    baseURL:"https://api.mapbox.com/geocoding/v5/mapbox.places",
    params:{
        limit:5,
        language:"es",
        access_token:"pk.eyJ1IjoiZXJvc2RldiIsImEiOiJja3ppZTUyaWowcHU3Mm9tcDhhZTF5OWFrIn0.4dKiXQc3La_FZCugPmA5Sg"
    }
})

export default searchApi

