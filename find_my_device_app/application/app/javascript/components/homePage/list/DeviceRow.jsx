import React from "react"

import BaseDivider from '../../shared/BaseDivider'

const DeviceRow = ({
    focusedDevice,
    setFocusedDevice,
    device,
    isLastRow
}) => {
    const onDeviceSelected = () => {
        //console.log("Focused Device Set To: ", device);
        setFocusedDevice(device);
    }

    const unfocusedDeviceRow = () => {
        let className = "deviceRow"
        if (device.status == "missing") className = "deviceRowMissing"
        if (device.registration_status != "registered") className = "deviceRowPending"
        return (
            <div className={className}>
            <div>
                <img className="circularSquare" src="https://image.shutterstock.com/image-vector/smartphone-iphone-style-black-color-260nw-530681137.jpg" alt="..."/>
            </div>
            <div className="test" onClick={onDeviceSelected}>
                <h2>{device.name}</h2>
                {device.registration_status == "pending" 
                    ? <h4>Registration Pending</h4>
                    : device.status == "missing" 
                        ? <h4>Status: Missing</h4>
                        : <h4>Status: Good Standing</h4>
                }
            </div>
            </div>
        )
    }

    const focusedDeviceRow = () => {
        let className = "focusedDeviceRow"
        if (device.status == "missing") className = "focusedDeviceRowMissing"
        if (device.registration_status != "registered") className = "focusedDeviceRowPending"
        return (
            <div className={className}>
            <div>
                <img className="circularSquare" src="https://image.shutterstock.com/image-vector/smartphone-iphone-style-black-color-260nw-530681137.jpg" alt="..."/>
            </div>
            <div className="test" onClick={onDeviceSelected}>
                <h2>{device.name}</h2>
                {device.registration_status == "pending" 
                    ? <h4>Registration Pending</h4>
                    : device.status == "missing" 
                        ? <h4>Status: Missing</h4>
                        : <h4>Status: Good Standing</h4>
                }
            </div>
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
