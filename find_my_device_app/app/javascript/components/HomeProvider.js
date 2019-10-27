import React, { useState } from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'

import styles from './homePage/styles.scss';
import configureStore from '../configureStore'
import HomePage from './homePage/HomePage';

// const store = configureStore({
//   currentUser: this.props.user,
//   userDevices: this.props.devices
// });
 
class HomeProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userDevices: this.props.devices
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
