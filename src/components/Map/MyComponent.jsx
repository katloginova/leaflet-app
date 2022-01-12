import { useMap, useMapEvents } from "react-leaflet"

function MyComponent () {
    const map = useMapEvents( {
        click: ( e ) => {
            map.locate();
            console.log( e.latlng )
        },
        locationfound: ( location ) => {
            console.log( 'location found:', location )
        },
    } )

    return null
}

export default MyComponent;