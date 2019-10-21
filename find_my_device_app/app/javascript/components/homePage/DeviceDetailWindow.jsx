import React from "react"

import DeviceInfoFooter from './details/DeviceInfoFooter'

const DeviceDetailWindow = ({
    test,
    focusedDevice,
    styles
}) => {
    const markDeviceMissing = () => {
        console.log("Device marked missing")
    }

    const markDeviceFound = () => {

    }

    const displayFocusedDevice = () => {
        return (
            <div>
                <div className="deviceInfoHorizontalLayout">
                    <img src="https://image.shutterstock.com/image-vector/smartphone-iphone-style-black-color-260nw-530681137.jpg" className="mr-3" alt="..."/>

                    <div className="deviceInfoList">
                        <h3 className="mt-0">Device Name: {focusedDevice.name}</h3>
                        <h4 className="mt-0">Device IMEI: {focusedDevice.macaddress}</h4>
                        <h4 className="mt-0">This device not currently reported mising.</h4>
                        <button className="markDeviceMissingButton" onClick={markDeviceMissing}>Mark Device Missing</button>
                    </div>
                </div>
                <DeviceInfoFooter></DeviceInfoFooter>
            </div>
        )
    }

    return (
        <>
            <div className="deviceDetailCard">
                {focusedDevice
                    ? displayFocusedDevice()
                    : <p>No devices focused</p>
                }
            </div>
        </>
    )
}

export default DeviceDetailWindow;
