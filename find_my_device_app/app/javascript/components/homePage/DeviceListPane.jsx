import React from "react"

import DeviceRow from './list/DeviceRow'

const DeviceListPane = ({
    focusedDevice,
    devices,
    styles
}) => {

    const renderDeviceRow = (device) => {
        return (<DeviceRow key={device.id} {...{
            focusedDevice,
            device
        }}></DeviceRow>)
    }

    return (
        <>
            <div className="deviceList">
                <h1>Device list pane</h1>
                { devices.map( device => renderDeviceRow(device) ) }
            </div>
        </>
    )
}

export default DeviceListPane;
