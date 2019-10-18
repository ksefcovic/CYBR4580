import { createStore, applyMiddleware } from 'redux';
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