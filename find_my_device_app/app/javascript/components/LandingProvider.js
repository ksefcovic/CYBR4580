import React from "react"
import PropTypes from "prop-types"
import styles from "../../assets/stylesheets/landingStyles.scss"

class LandingProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className={styles.blueBackground}>
          <h1>Landing Provider</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingProvider;
