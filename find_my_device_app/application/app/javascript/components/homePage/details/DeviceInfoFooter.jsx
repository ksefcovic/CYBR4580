import React from "react"
import FoundAtMap from './FoundAtMap'
import BaseDivider from '../../shared/BaseDivider'

const DeviceInfoFooter = ({
    knownLocations,
    //setSelectedMarker
}) => {
    const renderLocation = (location) => {
        const [selectedMarker, setSelectedMarker] = React.useState({ lat: 0, lng: 0});
        const [showMap, setShowMap] = React.useState(false);
        return (
            <div className="knownLocationRow">
                <p onClick={() => {
                    setShowMap(!showMap);
                    setSelectedMarker({ lat: parseInt(location.latitude), lng: parseInt(location.longitude)});
                }} className="knownLocationRowHeader" key={location.timestamp}>Coordinates: {location.latitude},{location.longitude} Timestamp: {location.timestamp}</p>
                {location.latitude != null && location.longitude != null && showMap && <FoundAtMap {...{
                    lat: parseInt(location.latitude),
                    lng: parseInt(location.longitude),
                    marker: selectedMarker
                }}></FoundAtMap>}
                <BaseDivider {...{

                }}></BaseDivider>
            </div>
        )
    }

    return (
        <>
            <h2>Missing Device Info: </h2>
            { knownLocations.map(location => renderLocation(location)) }
        </>
    )
}

export default DeviceInfoFooter;