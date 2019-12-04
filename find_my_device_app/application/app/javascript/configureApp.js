import { createStore, applyMiddleware, compose } from 'redux';
import { middleWare, apiReducer, railsActions } from 'redux-rails'
//import { thunk } from 'redux-thunk';
//import thunkMiddleware = require("redux-thunk");
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    // test: "Test2",
    // focusedDevice: {id: 1, name: "testDevice"}
};

//http://ec2-3-17-64-157.us-east-2.compute.amazonaws.com
//http://localhost:3000/api/v1/
const apiConfig = {
    baseUrl: 'http://ec2-3-17-64-157.us-east-2.compute.amazonaws.com/api/v1/',
    resources: {
      Devices: {
        controller: 'devices'
      },
      Users: {
        controller: 'users'
      }
    }
  };

  const deviceFinderApiReducer = apiReducer(apiConfig);

  const App = createStore(
    deviceFinderApiReducer,
    initialState,
    compose(
      applyMiddleware(middleWare(apiConfig))
    )
  );

  export default App;
