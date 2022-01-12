import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerLeaflet from './MarkerLeaflet';

const array = [
    {
        id: "5b3b3fda82a750002cb3717c",
        lat: 50.42325834030328,
        lng: 30.51901083448521
    },
    {
        id: "5074a295e4b03cb6bc069c8c",
        lat: 50.41999696052698,
        lng: 30.520497078329914
    }
];

const arrPosition = array.map( ( item ) => {
    return [ item.lat, item.lng ];
} )


function Map () {
    const position = [ 50.42, 30.52 ];
    // useEffect( () => {
    //     fetch( 'https://api.foursquare.com/v2/venues/search?ll= 50.42,30.52&limit=2&client_id=NSQCUALHQL1RMUFNGZUFGMGZLY4TERL3SEGOIEV1UZD5UU3W&client_secret=LLR43ZZ0R1ESCSCU1GUAF45VLB2HV5JMZPHDCODK25RR4CBO&v=20210323' )
    //         .then( res => res.json() )
    //         .then( data => console.log( data.response.venues.map( ( item ) => {
    //             return {
    //                 id: item.id,
    //                 lat: item.location.lat,
    //                 lng: item.location.lng,
    //             }
    //         } ) ) )
    // }, [] )

    console.log( arrPosition );

    return (
        <MapContainer center={ arrPosition[ 0 ] } zoom={ 13 } >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            { arrPosition?.map( ( item, key ) => <MarkerLeaflet key={ key } pos={ item } /> ) }

        </MapContainer>
    );
}



export default Map;