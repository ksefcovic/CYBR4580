import React, { useState } from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'

import styles from './homePage/styles.scss';
import configureStore from '../configureStore'
import HomePage from './homePage/HomePage';
 
class HomeProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userDevices: this.props.devices,
      deviceTypes: this.props.device_types
    });

    return (
        <Provider store={store}>
          <HomePage {...{
            styles
          }}></HomePage>
        </Provider>
    );
  }
}

export default HomeProvider;
