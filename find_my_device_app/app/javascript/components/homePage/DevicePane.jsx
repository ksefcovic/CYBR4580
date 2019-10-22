import React, { useState } from "react"
import DeviceListPane from './DeviceListPane'
import DeviceDetailWindow from './DeviceDetailWindow'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useSelector, createSelector } from 'react-redux'

const DevicePane = ({
    user,
    devices,
    styles,
    addNewDevice,
    updateDeviceStatus
}) => {
    const [focusedDevice, setFocusedDevice] = useState(null);
    //const [newDevice, addNewDevice] = useState(null);

    if (focusedDevice == null && devices != null && devices.length > 0) {
        setFocusedDevice(devices[0]);
    }

    return (
        <>
        <div className="mainHomeLayout">
            <DeviceListPane className="deviceList" {...{
              user,
              focusedDevice,
              setFocusedDevice,
              devices,
              styles,
              addNewDevice
            }}></DeviceListPane>
            <DeviceDetailWindow className="deviceDetailCard" {...{
              focusedDevice,
              styles,
              addNewDevice,
              updateDeviceStatus
            }}></DeviceDetailWindow>
          </div>
        </>
    )
}

// Base Redux Implementation
function getTest() {
    return {
        type: 'GET_TEST_REQUEST'
    };
};

const structuredSelector = createStructuredSelector ({
    test: state => state.test,
});

const mapDispatchToProps = { getTest };

export default connect(structuredSelector, mapDispatchToProps)(DevicePane);
