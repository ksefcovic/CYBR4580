import { createStore, applyMiddleware } from 'redux';
import { middleWare, apiReducer, railsActions } from 'redux-rails'
//import { thunk } from 'redux-thunk';
//import thunkMiddleware = require("redux-thunk");
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    test: "Test2",
    focusedDevice: {id: 1, name: "testDevice"}
};

function rootReducer(state, action) {
    switch (action.type) {
        case "GET_FOCUSED_DEVICE":
            return {};
        case "SET_FOCUSED_DEVICE":
            focusedDevice = {id: 2, name: "newDevice"}
        default:
            return state;
    }
}

// const apiConfig = {
//     baseUrl: 'https://localhost:3000/',
//     resources: {
//       Devices: {
//         controller: 'devices'
//       },
//       Users: {
//         controller: 'users'
//       }
//     }
//   }

//   const App = createStore(
//     {
//       resources: apiReducer(apiConfig) // auto-generates reducers
//     },
//     {},
//     compose(
//       applyMiddleware(middleWare(apiConfig))
//     )
//   )

//   export default App;

//   App.dispatch(railsActions.update({
//     resource: 'Devices',
//     id: 3,
//     attributes: {
//       title: 'foo',
//       body: 'bar'
//     }
//   }))

//   App.dispatch(railsActions.create({
//     resource: 'Devices',
//     attributes: {
//       name: 'foo',
//       type: 'bar'
//     }
//   }))

export default function configureStore() {
    const store = createStore(
        rootReducer, 
        initialState,
        composeWithDevTools (
            applyMiddleware(thunk)
        )
    );
    return store;
}