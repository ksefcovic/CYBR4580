import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'

import HomeProvider from './HomeProvider'
import LandingProvider from './LandingProvider'
import configureStore from '../configureStore'

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>This is app.</h1>
        {this.props.hasValidToken
          ? 
          <Provider store={store}>
            <HomeProvider {...{
              user: this.props.user,
              styles: {}
            }}></HomeProvider>
          </Provider>
          : <LandingProvider></LandingProvider>
        }
      </React.Fragment>
    );
  }
}

export default App
