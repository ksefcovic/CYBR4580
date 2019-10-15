import React from "react"

const DeviceDetailWindow = ({
    focusedDevice,
    styles
}) => {
    const displayFocusedDevice = () => {
        return (
            <div>
                <h2>Device Name: {focusedDevice.name}</h2>
                <h2>Device MacAdress: {focusedDevice.macaddress}</h2>
            </div>
        )
    }

    return (
        <>
            <div className="deviceDetailCard">
                <h1>Device Detail Window</h1>
                {focusedDevice
                    ? displayFocusedDevice()
                    : <p>No devices focused</p>
                }
            </div>
        </>
    )
}

export default DeviceDetailWindow;
