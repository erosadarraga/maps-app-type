import React from 'react'
import ReactDOM from 'react-dom'
import { MapsApp } from './MapsApp'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJvc2RldiIsImEiOiJja3ppZTUyaWowcHU3Mm9tcDhhZTF5OWFrIn0.4dKiXQc3La_FZCugPmA5Sg';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolacation')
  throw new Error('Tu navegador no tiene opcion de Geolacation')
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root'),
)
