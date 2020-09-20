import React from 'react'


import MapSection from '../Map' 


const location = {
    address: 'Tourism Company',
    lat: 28.7041,
    lng: 77.1025,
  }

export default function Address() {
    return (<>
        
        <MapSection location={location} zoomLevel={20} />
        
        </>
    )
}
