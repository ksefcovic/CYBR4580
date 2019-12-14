import React from "react"
import FoundAtMap from './FoundAtMap'
import BaseDivider from '../../shared/BaseDivider'

const DeviceInfoFooter = ({
    knownLocations
}) => {
    const renderLocation = (location) => {
        const [selectedMarker, setSelectedMarker] = React.useState({ lat: 0, lng: 0});
        const [showMap, setShowMap] = React.useState(false);
        return (
            <div className="knownLocationRow">
                <p onClick={() => {
                    setShowMap(!showMap);
                    setSelectedMarker({ lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)});
                }} className="knownLocationRowHeader" key={location.timestamp}><b>Coordinates:</b> {location.latitude},{location.longitude} <b>Timestamp:</b> {location.timestamp}</p>
                {location.latitude != null && location.longitude != null && showMap && <FoundAtMap {...{
                    lat: parseFloat(location.latitude),
                    lng: parseFloat(location.longitude),
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