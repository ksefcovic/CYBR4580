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
    styles,
    onRemoveDevice,
    deviceTypes
}) => {
    return (
        <>
            <DevicePane {...{
                user: currentUser,
                devices: userDevices,
                styles,
                addNewDevice: onAddDevice,
                updateDeviceStatus: onUpdateDeviceStatus,
                onRemoveDevice,
                deviceTypes
            }} ></DevicePane>
        </>
    )
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageBase);
  

export default HomePage;
