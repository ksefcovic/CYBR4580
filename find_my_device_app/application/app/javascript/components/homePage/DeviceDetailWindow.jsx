import React from "react"

import DeviceInfoFooter from './details/DeviceInfoFooter'
import FoundAtMap from './details/FoundAtMap'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DeviceDetailWindow = ({
    focusedDevice,
    styles,
    setDeviceStatus,
    addNewDevice,
    updateDeviceStatus,
    onRemoveDevice
}) => {
    console.log("DeviceDetailWindow", focusedDevice);
    const [dropDownIsOpen, setDropDownIsOpen] = React.useState(false)

    const markDeviceMissing = () => {
        console.log("Device marked missing: ", focusedDevice.id, " Status: missing");
        updateDeviceStatus(focusedDevice.id, "missing");
    }

    const markDeviceFound = () => {
        console.log("Device marked found");
        updateDeviceStatus(focusedDevice.id, "good-standing");
    }

    const removeDevice = () => {
        console.log("Remove Device");
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
       // const [selectedMarker, setSelectedMarker] = React.useState({ lat: 0, lng: 0});

       // focusedDevice.known_locations.length > 0 &&  setSelectedMarker({ lat: parseInt(focusedDevice.known_locations[0].latitude), lng: parseInt(focusedDevice.known_locations[0].longitude) })
        // let locationPositions = [];
        // focusedDevice.known_locations.map(location => {
        //     let locationPair = {
        //         lat: parseInt(location.latitude),
        //         lng: parseInt(location.longitude)
        //     }
        //     locationPositions.push(locationPair);
        // });
        return (
            <div className="missingDeviceInfoCard">
                {dropDownIsOpen 
                    ? <button onClick={toggleDropdown} className="showMoreDetailButton">- Show Less Details</button>
                    : <button onClick={toggleDropdown} className="showMoreDetailButton">+ Show More Details</button> }
                {dropDownIsOpen
                ? <div>
                    <DeviceInfoFooter {...{
                    knownLocations: focusedDevice.known_locations,
                   // setSelectedMarker
                }}></DeviceInfoFooter>
                {/* <FoundAtMap {...{
                    lat: locationPositions.length > 0 ? locationPositions[0].lat : 0,
                    lng: locationPositions.length > 0 ? locationPositions[0].lng : 0,
                    marker: selectedMarker
                }}></FoundAtMap> */}
                </div>
                : <h2 className="centerText">...</h2>}
            </div>
        )
    }

    const displayFocusedDevice = () => {
        const [showRegistrationHelp, setShowRegistrationHelp] = React.useState(false);
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
