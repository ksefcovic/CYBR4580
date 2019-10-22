import React from "react"

import DeviceInfoFooter from './details/DeviceInfoFooter'

const DeviceDetailWindow = ({
    focusedDevice,
    styles,
    setDeviceStatus,
    addNewDevice,
    updateDeviceStatus
}) => {
    const [dropDownIsOpen, setDropDownIsOpen] = React.useState(false)

    const markDeviceMissing = () => {
        console.log("Device marked missing: ", focusedDevice.id, " Status: missing");
        //setDeviceStatus("missing");
        updateDeviceStatus(focusedDevice.id, "missing");
    }

    const markDeviceFound = () => {
        console.log("Device marked found");
        //setDeviceStatus("good-standing");
        updateDeviceStatus(focusedDevice.id, "good-standing");
    }

    const renderRegisteredDeviceInfo = () => {
        return (
            <>
                {focusedDevice.status == "missing"
                    ? <h4 className="mt-0">This device has been reported mising.</h4>
                    : <h4 className="mt-0">This device not currently reported mising.</h4>
                }
            </>
        )
    }

    const renderPendingDeviceInfo = () => {
        return (
            <h4 className="mt-0">This device is not yet registered, to register this device, download the app on your phone and enter the 6 digit code: {focusedDevice.registration_code}</h4>
        )
    }

    const renderMarkDeviceMissingButton = () => {
        const enabled = focusedDevice.registration_status == "registered";
        return (
            <button className="markDeviceMissingButton" enabled={enabled ? 1 : 0} onClick={markDeviceMissing}>Mark Device Missing</button>
        )
    }

    const renderMarkDeviceFoundButton = () => {
        const enabled = focusedDevice.registration_status == "registered";
        return (
            <button className="markDeviceFoundButton" enabled={enabled ? 1 : 0} onClick={markDeviceFound}>Mark Device Found</button>
        )
    }

    const toggleDropdown = () => {
        setDropDownIsOpen(!dropDownIsOpen);
    }

    const renderMissingDeviceInfo = () => {
        return (
            <>
                {dropDownIsOpen 
                    ? <button onClick={toggleDropdown}>- Show Less Details</button>
                    : <button onClick={toggleDropdown}>+ Show More Details</button> }
                {dropDownIsOpen
                && <DeviceInfoFooter {...{
                    knownLocations: focusedDevice.known_locations
                }}></DeviceInfoFooter>}
            </>
        )
    }

    const displayFocusedDevice = () => {
        return (
            <div>
                <div className="deviceInfoHorizontalLayout">
                    <img src="https://image.shutterstock.com/image-vector/smartphone-iphone-style-black-color-260nw-530681137.jpg" className="mr-3" alt="..."/>

                    <div className="deviceInfoList">
                        <h3 className="mt-0">Device Name: {focusedDevice.name}</h3>
                        <h4 className="mt-0">Device IMEI: {focusedDevice.imei}</h4>
                        {focusedDevice.registration_status == "registered"
                            ? renderRegisteredDeviceInfo()
                            : renderPendingDeviceInfo() }
                        {focusedDevice.status == "missing"
                            ? renderMarkDeviceFoundButton()
                            : renderMarkDeviceMissingButton() 
                        }
                    </div>
                </div>
                { focusedDevice && focusedDevice.status == "missing" && renderMissingDeviceInfo() }
            </div>
        )
    }

    const addNewDeviceForm = () => {
        console.log("Add new device")
        //Todo: open form
    }

    const displayEmptyState = () => {
        return (
            <>
                <p>You currently have no device added.</p>
                <div onClick={addNewDeviceForm} className="addNewDeviceButton">
                    Add New Device +
                </div>
            </>
        )
    }

    return (
        <>
            <div className="deviceDetailCard">
                {focusedDevice
                    ? displayFocusedDevice()
                    : displayEmptyState()
                }
            </div>
        </>
    )
}

export default DeviceDetailWindow;
