import React from "react"
import BaseDivider from '../../shared/BaseDivider'

const DeviceRow = ({
    focusedDevice,
    setFocusedDevice,
    device,
    isLastRow
}) => {
    const onDeviceSelected = () => {
        setFocusedDevice(device);
    }

    const unfocusedDeviceRow = () => {
        let className = "deviceRow"
        if (device.status == "missing") className = "deviceRowMissing"
        if (device.registration_status != "registered") className = "deviceRowPending"
        return (
            <div className={className} onClick={onDeviceSelected}>
            <div>
                <img className="circularSquare" src={device.type_photo_url} alt="..."/>
            </div>
            <div className="test">
                <h2>{device.name}</h2>
                {device.registration_status == "pending" 
                    ? <h4>Registration Pending</h4>
                    : device.status == "missing" 
                        ? <h4>Missing</h4>
                        : <h4>Good Standing</h4>
                }
            </div>
            {device.status == "missing" && <img className="redAlertIcon" src="https://icon-library.net/images/icon-alert/icon-alert-4.jpg" alt="..."/>}
            </div>
        )
    }

    const focusedDeviceRow = () => {
        let className = "focusedDeviceRow"
        if (device.status == "missing") className = "focusedDeviceRowMissing"
        if (device.registration_status != "registered") className = "focusedDeviceRowPending"
        return (
            <div className={className} onClick={onDeviceSelected}>
            <div>
                <img className="circularSquare" src={device.type_photo_url} alt="..."/>
            </div>
            <div className="test">
                <h2>{device.name}</h2>
                {device.registration_status == "pending" 
                    ? <h4>Registration Pending</h4>
                    : device.status == "missing" 
                        ? <h4>Missing</h4>
                        : <h4>Good Standing</h4>
                }
            </div>
            {device.status == "missing" && <img className="redAlertIcon" src="https://icon-library.net/images/icon-alert/icon-alert-4.jpg" alt="..."/>}
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
