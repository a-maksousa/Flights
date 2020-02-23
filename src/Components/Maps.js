import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react"

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({               
  apiKey: "http://maps.googleapis.com/maps/api/js?libraries=geometry&sensor=false&key=AIzaSyAv5ibFbQjqH003cFvA1Y-Fa-hdaCTABxM&callback=initMap"
})(MapContainer)