import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'

import DevicePane from './homePage/DevicePane'
import styles from './homePage/styles.scss';
import configureStore from '../configureStore'

const store = configureStore();

class HomeProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider store={store}>
          <h2>Hello {this.props.user.first_name} {this.props.user.last_name}</h2>
          <DevicePane {...{
            devices: [{id: 1, name: "Macbook Pro", macaddress: "macadress"}, {id: 2, name: "iPhone", macaddress: "macadress"}],
            styles
          }}></DevicePane>
        </Provider>
      </React.Fragment>
    );
  }
}

export default HomeProvider
