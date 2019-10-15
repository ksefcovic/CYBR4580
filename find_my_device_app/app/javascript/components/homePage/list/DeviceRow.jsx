import React from "react"

const DeviceRow = ({
    focusedDevice,
    device
}) => {
    const onDeviceSelected = () => {
        console.log("Focused Device Set To: ", device);
        focusedDevice = device;
    }

    const unfocusedDeviceRow = () => {
        return (
            <div className="deviceRow" onClick={onDeviceSelected}>
                <h1>Device Row</h1>
                <h2>{device.name}</h2>
            </div>
        )
    }

    const focusedDeviceRow = () => {
        return (
            <div className="deviceRow" onClick={onDeviceSelected}>
                <h1>Device Row</h1>
                <h2>{device.name}</h2>
            </div>
        )
    }

    return (
        <>
            { focusedDevice && focusedDevice.id == device.id
                ? focusedDeviceRow()
                : unfocusedDeviceRow()
            }
        </>
    )
}

export default DeviceRow;
