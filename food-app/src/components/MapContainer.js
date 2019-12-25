import React, {useState} from 'react';
import './MapContainer.scss';
import ReactMapGL from 'react-map-gl';


const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 45.421,
        longitude: -75.6983,
        width: '100vw',
        height: '100vh',
        zoom: 10
    })

    return (
        <div>
            <ReactMapGL>
                markers here
            </ReactMapGL>
        </div>
    )
}

export default Map