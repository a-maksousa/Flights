// default for React
import React from "react"
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

export default function MapContainer() {
 const handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor)
  }
  const markers = {
    Istanbul: [[41.015137, 28.979530], 13],
    Cairo: [[	30.033333, 31.233334], 13],
    Aqaba: [[29.52667, 35.00778], 11],
    Doha: [[25.286106, 51.534817], 12],
    Beirut: [[	33.888630, 35.495480], 10]
  }
    return (
      <Map defaultCenter={[41.015137, 28.979530]} defaultZoom={4} >
        {Object.keys(markers).map(key => (
              <Marker key={key} anchor={markers[key][0]} payload={key} onClick={handleMarkerClick} />
            ))} 
      </Map>
    )
  
}