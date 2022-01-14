import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerLeaflet from './MarkerLeaflet';
import * as L from "leaflet";
// import image1 from ;
import './style.css';

const array = [
    {
        id: "5b3b3fda82a750002cb3717c",
        lat: 48.434151349216265,
        lng: 35.013602692108535
    },
    {
        id: "5074a295e4b03cb6bc069c8c",
        lat: 48.434151349216265,
        lng: 35.003602692108535
    }
];

const arrPosition = array.map( ( item ) => {
    return [ item.lat, item.lng ];
} )


function Map () {
    const position = [ 48.434151349216265, 35.013602692108535 ];

    useEffect( () => {

        // fetch( "https://api-adresse.data.gouv.fr/search/?q=kiev&type=street" )
        //     .then( res => res.json() )
        //     .then( data => console.log( data.response.venues.map( ( item ) => {
        //         return {
        //             id: item.id,
        //             lat: item.location.lat,
        //             lng: item.location.lng,
        //         }
        //     } ) ) )
        // .then( data => console.log( data ) )
    }, [] )

    console.log( arrPosition );

    return (
        <MapContainer center={ position } zoom={ 20 } style={ { width: '100%', height: '100hv' } }>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            { arrPosition?.map( ( item, key ) => <MarkerLeaflet key={ key } pos={ item } /> ) }
        </MapContainer>
    );
}



export default Map;