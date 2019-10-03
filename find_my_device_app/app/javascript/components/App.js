import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeProvider from './HomeProvider'

import configureStore from '../configureStore';

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <>
        <h1>App Main</h1>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <HomeProvider></HomeProvider>}></Route>
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App
