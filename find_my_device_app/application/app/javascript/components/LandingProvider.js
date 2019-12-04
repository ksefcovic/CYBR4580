import React from "react"
import PropTypes from "prop-types"
import styles from "../../assets/stylesheets/landingStyles.scss"

class LandingProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className={styles.blueBackground}>
          <h1>Welcome to Device Finder.</h1>
          <p>What is the purpose of device finder?</p>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingProvider;
