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
    updateDeviceStatus,
    onRemoveDevice,
    deviceTypes
}) => {
    const [focusedDeviceIndex, setFocusedDeviceIndex] = useState(0);
    const [focusedDevice, setFocusedDevice] = useState(null)

    const getFocusedDeviceIndex = () => {
        let index = 0;
        if (devices == null || devices.length == 0) {
            return null;
        }
        if (focusedDevice == null) {
            return 0;
        }
        for  (index = 0; index < devices.length; index++) {
            if (devices[index].id == focusedDevice.id) {
                return index;
            }
        }
        return 0;
    }

    return (
        <>
        <div className="mainHomeLayout">
            <DeviceListPane className="deviceList" {...{
              user,
              focusedDevice: (getFocusedDeviceIndex() != null)
                                ? devices[getFocusedDeviceIndex()]
                                : null,
              setFocusedDevice,
              devices: devices ? devices : [],
              styles,
              addNewDevice,
              deviceTypes
            }}></DeviceListPane>
            <DeviceDetailWindow className="deviceDetailCard" {...{
              focusedDevice: (getFocusedDeviceIndex() != null)
              ? devices[getFocusedDeviceIndex()]
              : null,
              styles,
              addNewDevice,
              updateDeviceStatus,
              onRemoveDevice
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
