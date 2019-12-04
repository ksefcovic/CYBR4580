import { createStore, applyMiddleware, combineReducers } from 'redux';
import { middleWare, apiReducer, railsActions } from 'redux-rails';
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ADD_DEVICE, 
    UPDATE_DEVICE_STATUS, 
    UPDATE_DEVICE_STATUS_SUCCESS,
    ADD_DEVICE_SUCCESS, 
    ADD_DEVICE_FAILURE,
    SET_LOADING_STATUS,
    REMOVE_DEVICE_SUCCESS
} from './components/actions'
import update from 'immutability-helper';

const initialState = {
    currentUser: {},
    userDevices: [],
    isLoading: false
};

function isLoading(state = false, action) {
    switch (action.type) {
        case SET_LOADING_STATUS:
            console.log("Loading Set To: ", action.isLoading);
            return action.isLoading;
        default:
            return state;
    }
}

function currentUser(state = {}, action) {
    return state;
}

function userDevices(state = [], action) {
    switch (action.type) {
        case ADD_DEVICE:
            console.log("Add New Device Requested");
            return state;
        case ADD_DEVICE_SUCCESS:
            console.log("Device Added: ", action.devices);
            return action.devices;
        case ADD_DEVICE_FAILURE:
            console.log("Device Added Failure: ", action.error);
            return state;
        case UPDATE_DEVICE_STATUS_SUCCESS:
            console.log("Updating status to:", action.status);
            var index = 0;
            for (index = 0; index < state.length; index++) {
                if (state[index].id === action.deviceId) {
                    break;
                }
            }
            return update(state, { 
                  [index]: {
                    status: {$set: action.status}
                  }
              });
        case REMOVE_DEVICE_SUCCESS:
            console.log("Update Device Status: ", action.devices);
            return action.devices;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentUser,
    userDevices,
    isLoading
})

export default function configureStore(hydratedState = {}) {
    const store = createStore(
        rootReducer, 
        {...initialState, ...hydratedState},
        composeWithDevTools (
            applyMiddleware(thunk)
        )
    );
    return store;
}