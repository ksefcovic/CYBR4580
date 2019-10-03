import React from "react"
import PropTypes from "prop-types"
class HomeProvider extends React.Component {
  render () {
    return (
      <>
        <h1>This is where the user home page componenets will originate from => Place components in javascript/home folder</h1>
        <h2>Header</h2>
        <h2>Device List Side Pane</h2>
        <h2>Device info preview window</h2>
      </>
    );
  }
}

export default HomeProvider
