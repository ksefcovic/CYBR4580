import React from "react"

const DeviceRow = ({
    device
}) => {
    return (
        <>
            <h1>Device Row</h1>
            <h2>{device.name}</h2>
        </>
    )
}

export default DeviceRow;
