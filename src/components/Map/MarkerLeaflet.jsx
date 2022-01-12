import { useState } from "react";
import { Marker, Popup } from "react-leaflet";

function MarkerLeaflet ( { pos } ) {
    const [ lat, setLat ] = useState( null );
    const [ lng, setLng ] = useState( null );

    const clickHandler = {
        click: ( e ) => {
            console.log( e.latlng )
            setLat( e.latlng.lat.toFixed( 2 ) );
            setLng( e.latlng.lng.toFixed( 2 ) );
        },
    }

    return (
        <Marker position={ pos } eventHandlers={ clickHandler } style={ { fillColor: "#000" } } >

            <Popup>
                lat={ lat }, lng={ lng }
            </Popup>
        </Marker>
    )
}

export default MarkerLeaflet;