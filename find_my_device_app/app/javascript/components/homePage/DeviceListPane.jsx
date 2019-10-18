import React from "react"

import DeviceRow from './list/DeviceRow'

const DeviceListPane = ({
    focusedDevice,
    setFocusedDevice,
    devices,
    styles
}) => {

    const addNewDevice = () => {
        console.log("Add new device")
    }

    const renderDeviceRow = (device) => {
        return (<DeviceRow key={device.id} {...{
            focusedDevice,
            setFocusedDevice,
            device
        }}></DeviceRow>)
    }

    return (
        <>
            <div className="deviceList">
                <div className="deviceListHeader">
                    Your Devices
                </div>
                { devices.map( device => renderDeviceRow(device) ) }
                <div onClick={addNewDevice} className="addNewDeviceButton">
                    Add New Device +
                </div>
            </div>
        </>
    )
}

export default DeviceListPane;
