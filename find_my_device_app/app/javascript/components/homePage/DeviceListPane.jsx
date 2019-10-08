import React from "react"

import DeviceRow from './list/DeviceRow'

const DeviceListPane = ({
    devices,
    styles
}) => {

    const renderDeviceRow = (device) => {
        return (<DeviceRow key={device.id} {...{
            device: device
        }}></DeviceRow>)
    }

    return (
        <>
            <h1>Device list pane</h1>
            { devices.map( device => renderDeviceRow(device) ) }
        </>
    )
}

export default DeviceListPane;
