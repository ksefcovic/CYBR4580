import React from "react"

import DeviceRow from './list/DeviceRow'
import AddDeviceForm from './details/AddDeviceForm'

const DeviceListPane = ({
    user,
    focusedDevice,
    setFocusedDevice,
    devices,
    addNewDevice,
    deviceTypes
}) => {

    const [showAddDeviceForm, setShowAddDeviceForm] = React.useState(false);
    const newDeviceButtonText = showAddDeviceForm 
        ? "Close Form"
        : "Add New Device +"

    const addNewDeviceForm = () => {
        setShowAddDeviceForm(!showAddDeviceForm);
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
                <div className="deviceListContainer">
                    { devices.map( device => renderDeviceRow(device) ) }
                </div>
                <div onClick={addNewDeviceForm} className="addNewDeviceButton">
                    {newDeviceButtonText}
                </div>
                {showAddDeviceForm 
                && <AddDeviceForm {...{
                    user,
                    addNewDevice,
                    deviceTypes,
                    onClose: () => {
                        setShowAddDeviceForm(false);
                    }
                }}></AddDeviceForm> }
            </div>
        </>
    )
}

export default DeviceListPane;
