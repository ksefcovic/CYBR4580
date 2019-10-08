import React from "react"
import PropTypes from "prop-types"

import HomeProvider from './HomeProvider'
import LandingProvider from './LandingProvider'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>This is app.</h1>
        {this.props.hasValidToken
          ? <HomeProvider {...{
            user: {name: "Test", devices: []}
          }}></HomeProvider>
          : <LandingProvider></LandingProvider>
        }
      </React.Fragment>
    );
  }
}

export default App
