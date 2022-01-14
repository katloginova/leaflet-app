import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

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

    const LeafIcon = L.DivIcon.extend( {
        options: {},
    } );

    const geoIcon = new LeafIcon( {
        html: '<i class="fas fa-map-marker-alt" ></i>'
    } );

    return (
        <Marker position={ pos } eventHandlers={ clickHandler } icon={ geoIcon }  >
            <Popup>
                lat={ lat }, lng={ lng }
            </Popup>
        </Marker >
    )
}

export default MarkerLeaflet;