import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Map () {
    return (
        <MapContainer
            center={ [ 33.8735578, 35.86379 ] }
            zoom={ 9 }
            scrollWheelZoom={ true }

        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default Map;