import { createStore, applyMiddleware, combineReducers } from 'redux';
import { middleWare, apiReducer, railsActions } from 'redux-rails';
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ADD_DEVICE, 
    UPDATE_DEVICE_STATUS, 
    UPDATE_DEVICE_STATUS_SUCCESS,
    ADD_DEVICE_SUCCESS, 
    ADD_DEVICE_FAILURE,
    SET_LOADING_STATUS
} from './components/actions'

const initialState = {
    currentUser: {},
    userDevices: [{ user_id: 1, name: "initial device", imei: "", status: "good-standing", registration_status: "pending", known_locations: [], registration_code: "123456" }],
    isLoading: false
};

const apiConfig = {
    baseUrl: 'http://localhost:3000/api/v1/',
    resources: {
      Devices: {
        controller: 'devices'
      },
      Users: {
        controller: 'users'
      }
    }
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
    switch (action.type) {
        default:
            return state;
    }
}

function userDevices(state = [], action) {
    switch (action.type) {
        case ADD_DEVICE:
            console.log("Add New Device Requested");
            return state;//[...state, { id: 1, user_id: action.userId, name: action.name, imei: "", status: "good-standing", registration_status: "pending", known_locations: [], registration_code: "123456" }];
        case ADD_DEVICE_SUCCESS:
            console.log("Device Added: ", action.device);
            return [...state, action.response.data];
        case ADD_DEVICE_FAILURE:
            console.log("Device Added Failure: ", action.error);
            return state;
        case UPDATE_DEVICE_STATUS_SUCCESS:
            let newState = state;
            let index = 0;
            console.log(action.deviceId, action.status);
            for (index = 0; index < newState.length; index++) {
                if (newState[index].id === action.deviceId) {
                    console.log("Device Found");
                    newState[index].status = action.status
                }
            }
            return newState;
        default:
            return state;
    }
}

const deviceFinderApiReducer = apiReducer(apiConfig);

const rootReducer = combineReducers({
    deviceFinderApiReducer,
    currentUser,
    userDevices,
    isLoading
})

export default function configureStore(hydratedState = {}) {
    const store = createStore(
        rootReducer, 
        {...initialState, ...hydratedState},
        composeWithDevTools (
            applyMiddleware(thunk),
            applyMiddleware(middleWare(apiConfig))
        )
    );
    return store;
}