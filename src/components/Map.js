import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'


const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Company</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
)
const LocationPin = ({ text }) => (
    <div className="pin">
      <i className='fas fa-map-pin fa-xl'/>
      <p className="pin-text">{text}</p>
    </div>
  )

  export default Map