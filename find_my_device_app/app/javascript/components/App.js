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
          ? <HomeProvider {...{
            user: {name: "Michael Scott", devices: []},
            styles: {}
          }}></HomeProvider>
          : <LandingProvider></LandingProvider>
        }
      </React.Fragment>
    );
  }
}

export default App
