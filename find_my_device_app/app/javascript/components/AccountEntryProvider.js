import React from "react"
import PropTypes from "prop-types"
import Login from './accountEntry/Login';

class AccountEntryProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Account Entry:</h1>
        { this.props.newAccount 
          ? <h1>Create Account</h1> 
          : <Login></Login> }
      </React.Fragment>
    );
  }
}

export default AccountEntryProvider
