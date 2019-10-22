import React from "react"

import DeviceRow from './list/DeviceRow'
import AddDeviceForm from './details/AddDeviceForm'

const DeviceListPane = ({
    user,
    focusedDevice,
    setFocusedDevice,
    devices,
    styles,
    addNewDevice
}) => {

    const addNewDeviceForm = () => {
        console.log("Add new device");
        //Todo: open form
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
                <div onClick={addNewDeviceForm} className="addNewDeviceButton">
                    Add New Device +
                </div>
                <AddDeviceForm {...{
                    user,
                    addNewDevice
                }}></AddDeviceForm>
            </div>
        </>
    )
}

export default DeviceListPane;
