import React, { useState } from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'

import DevicePane from './homePage/DevicePane'
import styles from './homePage/styles.scss';
import configureStore from '../configureStore'
import dispatchActions from './dispatch'

const store = configureStore();
//const [newDevice, addNewDevice] = useState(null);

console.log("Dispatch Actions:", dispatchActions);
//[{id: 1, name: "Macbook Pro", macaddress: "macadress"}, {id: 2, name: "iPhone", macaddress: "macadress"}]
class HomeProvider extends React.Component {
  //const [newDevice, addNewDevice] = useState(null);
  render () {
    return (
      <React.Fragment>
        <Provider store={store}>
          <h2>Hello {this.props.user.first_name} {this.props.user.last_name}</h2>
          <DevicePane {...{
            ...dispatchActions,
            user: this.props.user,
            devices: this.props.devices,
            styles
          }}></DevicePane>
        </Provider>
      </React.Fragment>
    );
  }
}

export default HomeProvider
