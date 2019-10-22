import React from "react"

import BaseDivider from '../../shared/BaseDivider'

const DeviceRow = ({
    focusedDevice,
    setFocusedDevice,
    device,
    isLastRow
}) => {
    const onDeviceSelected = () => {
        console.log("Focused Device Set To: ", device);
        setFocusedDevice(device);
    }

    const unfocusedDeviceRow = () => {
        const deviceName = device.registration_status == "registered"
        ? device.name
        : "Pending: " + device.name
        return (
            <div className="deviceRow" onClick={onDeviceSelected}>
                <h2>{deviceName}</h2>
            </div>
        )
    }

    const focusedDeviceRow = () => {
        const deviceName = device.registration_status == "registered"
        ? device.name
        : "Pending: " + device.name
        return (
            <div className="focusedDeviceRow" onClick={onDeviceSelected}>
                <h2>{deviceName}</h2>
            </div>
        )
    }

    return (
        <>
            { focusedDevice && focusedDevice.id == device.id
                ? focusedDeviceRow()
                : unfocusedDeviceRow()
            }
            { !isLastRow ? <BaseDivider {...{ thickness: "1px" }}></BaseDivider> : <></> }
        </>
    )
}

export default DeviceRow;
