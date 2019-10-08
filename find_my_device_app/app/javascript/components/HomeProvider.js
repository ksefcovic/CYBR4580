import React from "react"
import PropTypes from "prop-types"

import DeviceListPane from './homePage/DeviceListPane'
import DeviceDetailWindow from './homePage/DeviceDetailWindow'

class HomeProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>This is the Home Page</h1>
        <h2>Hello {this.props.user.name}</h2>
        <DeviceListPane {...{
          devices: [{id: "1", name: "macbook pro"}, {id: "2", name: "iphone"}],
          styles: this.props.styles
        }}></DeviceListPane>
        <DeviceDetailWindow {...{
          styles: this.props.styles
        }}></DeviceDetailWindow>
      </React.Fragment>
    );
  }
}

export default HomeProvider
