import './style.css';
import Location from './Location/Location';
import Map from './Map/Map';

function LeafletApp () {
    return (
        <div className="leflet-app">
            <Map />
            <Location />
        </div>
    );
}

export default LeafletApp;