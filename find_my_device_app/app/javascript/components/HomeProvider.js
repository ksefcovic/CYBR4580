import React from "react"
import PropTypes from "prop-types"

import DeviceListPane from './homePage/DeviceListPane'
import DeviceDetailWindow from './homePage/DeviceDetailWindow'
import styles from './homePage/styles.scss';

//"css-loader": "^2.1.1",
//"style-loader": "^1.0.0",
const horizontalLayout = {

}
const deviceList = {
  backgroundColor: "#37BC9B"
}
const deviceDetailCard = {
  backgroundColor: "#F6BB42"
}
//style={deviceDetailCard}

class HomeProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2>Hello {this.props.user.first_name} {this.props.user.last_name}</h2>
        <div className={styles.horizontalLayout}>
          <DeviceListPane className={styles.deviceList} {...{
            devices: [],
            styles
          }}></DeviceListPane>
          <DeviceDetailWindow className={styles.deviceDetailCard} {...{
            styles
          }}></DeviceDetailWindow>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeProvider
