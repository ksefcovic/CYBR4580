import React, { useState } from "react"
import DeviceListPane from './DeviceListPane'
import DeviceDetailWindow from './DeviceDetailWindow'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useSelector, createSelector } from 'react-redux'

const DevicePane = ({
    devices,
    styles
}) => {
    const [focusedDevice, setFocusedDevice] = useState(null);
    return (
        <>
        <div className="mainHomeLayout">
            <DeviceListPane className="deviceList" {...{
              focusedDevice,
              setFocusedDevice,
              devices,
              styles
            }}></DeviceListPane>
            <DeviceDetailWindow className="deviceDetailCard" {...{
              focusedDevice,
              styles
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
