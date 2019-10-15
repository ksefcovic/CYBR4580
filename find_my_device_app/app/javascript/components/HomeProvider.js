import React from "react"
import PropTypes from "prop-types"

import DeviceListPane from './homePage/DeviceListPane'
import DeviceDetailWindow from './homePage/DeviceDetailWindow'
import styles from './homePage/styles.scss';

//"css-loader": "^2.1.1",
//"style-loader": "^1.0.0",

class HomeProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2>Hello {this.props.user.first_name} {this.props.user.last_name}</h2>
        <div className="mainHomeLayout">
          <DeviceListPane className="deviceList" {...{
            focusedDevice: null,
            devices: [{id: 1, name: "Macbook Pro", macaddress: "macadress"}, {id: 2, name: "iPhone", macaddress: "macadress"}],
            styles
          }}></DeviceListPane>
          <DeviceDetailWindow className="deviceDetailCard" {...{
            focusedDevice: null,
            styles
          }}></DeviceDetailWindow>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeProvider
