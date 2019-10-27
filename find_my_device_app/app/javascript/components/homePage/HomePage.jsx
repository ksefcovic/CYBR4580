import React, { useState } from "react";
import { connect } from 'react-redux';

import DevicePane from './DevicePane';
import mapStateToProps from '../selector';
import mapDispatchToProps from '../dispatch';

const HomePageBase = ({
    currentUser,
    userDevices,
    onAddDevice,
    onUpdateDeviceStatus,
    styles
}) => {
    console.log("userDevices: ", userDevices);
    console.log("addDevices: ", onAddDevice);
    return (
        <>
            <DevicePane {...{
                user: currentUser,
                devices: userDevices,
                styles,
                addNewDevice: onAddDevice,
                updateDeviceStatus: onUpdateDeviceStatus
            }} ></DevicePane>
        </>
    )
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageBase);
  

export default HomePage;
