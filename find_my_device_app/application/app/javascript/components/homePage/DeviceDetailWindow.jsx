import React from "react"
import { Button } from 'reactstrap';
import DeviceInfoFooter from './details/DeviceInfoFooter'

const DeviceDetailWindow = ({
    focusedDevice,
    updateDeviceStatus,
    onRemoveDevice
}) => {
    const [dropDownIsOpen, setDropDownIsOpen] = React.useState(false);
    const [showRegistrationHelp, setShowRegistrationHelp] = React.useState(false);

    const markDeviceMissing = () => {
        updateDeviceStatus(focusedDevice.id, "missing");
    }

    const markDeviceFound = () => {
        updateDeviceStatus(focusedDevice.id, "good-standing");
    }

    const removeDevice = () => {
        onRemoveDevice(focusedDevice.id);
    }

    const renderRegisteredDeviceInfo = () => {
        return (
            <>
                {focusedDevice.status == "missing"
                    ? <h4 className="mt-0">This device has been reported mising.</h4>
                    : <h4 className="mt-0">This device is not currently reported missing.</h4>
                }
            </>
        )
    }

    const renderPendingDeviceInfo = () => {
        return (
            <div>
                <h4 className="mt-0">Registration Code: {focusedDevice.registration_code}</h4>
            </div>
        )
    }

    const renderMarkDeviceMissingButton = () => {
        const enabled = focusedDevice.registration_status == "registered";
        return (
            <>
                {enabled && <Button color="warning" className="" disabled={!enabled} onClick={markDeviceMissing}>Mark Device Missing</Button>}
            </>
        )
    }

    const renderMarkDeviceFoundButton = () => {
        const enabled = focusedDevice.registration_status == "registered";
        return (
            <Button color="success" className="markDeviceFoundButton" enabled={enabled ? 1 : 0} onClick={markDeviceFound}>Mark Device Found</Button>
        )
    }

    const toggleDropdown = () => {
        setDropDownIsOpen(!dropDownIsOpen);
    }

    const renderMissingDeviceInfo = () => {
        return (
            <div className="missingDeviceInfoCard">
                {dropDownIsOpen 
                    ? <button onClick={toggleDropdown} className="showMoreDetailButton">- Show Less Details</button>
                    : <button onClick={toggleDropdown} className="showMoreDetailButton">+ Show More Details</button> }
                {dropDownIsOpen
                ? <div>
                    <DeviceInfoFooter {...{
                    knownLocations: focusedDevice.known_locations
                }}></DeviceInfoFooter>
                </div>
                : <h2 className="centerText">...</h2>}
            </div>
        )
    }

    const displayFocusedDevice = () => {
        return (
            <div>
                <div className="deviceInfoHorizontalLayout">
                    <img src={focusedDevice.type_photo_url} className="circularSquareLarge" alt="..."/>

                    <div className="deviceInfoList">
                        <div className="mainDeviceInfoHeader">
                            <h3 className="mt-0"><b>{focusedDevice.name}</b></h3>
                            <h4 className="mt-0">Device IMEI: {focusedDevice.imei}</h4>
                        </div>
                        {focusedDevice.registration_status == "registered"
                            ? renderRegisteredDeviceInfo()
                            : renderPendingDeviceInfo() }
                        {focusedDevice.status == "missing"
                            ? renderMarkDeviceFoundButton()
                            : renderMarkDeviceMissingButton() 
                        }
                        {focusedDevice.registration_status != "registered" && <Button color="primary" className="markDeviceFoundButton"  onClick={() => setShowRegistrationHelp(true)}>Registration Help</Button>}
                        
                        <Button color="danger" className="markDeviceFoundButton" onClick={removeDevice}>Remove This Device</Button>

                        {focusedDevice.registration_status != "registered" && showRegistrationHelp && <div className="helpBubble">
                                <Button color="secondary" onClick={() => setShowRegistrationHelp(false)}>X</Button>
                                <p>To register this device, download our app on the device you want to register and follow the setup steps.</p>
                            </div>}
                    </div>
                    
                </div>
                { focusedDevice && focusedDevice.status == "missing" && renderMissingDeviceInfo() }
                
            </div>
        )
    }

    const displayEmptyState = () => {
        return (
            <>
                <div className="centeredEmptyState">
                    <p className="emptyStateText">You currently have no device added.</p>
                    <img src="http://www.urbanleagueneb.org/wp-content/uploads/2016/10/Mobile-Phone-Icon-1024x1024.png" className="emptyStateImage" alt="..."/>
                </div>
                <h2 className="bottomEmptyState">{"< Try adding a device here"}</h2>
            </>
        )
    }

    const cardClassName = (focusedDevice && focusedDevice.status == "missing")
        ? "missingDeviceDetailCard"
        : "deviceDetailCard"

    return (
        <>
            <div className={cardClassName}>
                {focusedDevice
                    ? displayFocusedDevice()
                    : displayEmptyState()
                }
            </div>
        </>
    )
}

export default DeviceDetailWindow;
