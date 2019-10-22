import React from "react"

const DeviceInfoFooter = ({
    knownLocations
}) => {
    const renderLocation = (location) => {
        return (
            <p key={location.timestamp}>Coordinates: {location.latitude},{location.longitude} Timestamp: {location.timestamp}</p>
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