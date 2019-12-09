/*
 * action types
 */

export const ADD_DEVICE = 'ADD_DEVICE';
export const ADD_DEVICE_SUCCESS = 'ADD_DEVICE_SUCCESS';
export const ADD_DEVICE_FAILURE = 'ADD_DEVICE_FAILURE';

export const REMOVE_DEVICE_SUCCESS = 'REMOVE_DEVICE_SUCCESS';
export const REMOVE_DEVICE_FAILURE = 'REMOVE_DEVICE_FAILURE';

export const UPDATE_DEVICE_STATUS = 'UPDATE_DEVICE_STATUS';
export const UPDATE_DEVICE_STATUS_SUCCESS = 'UPDATE_DEVICE_STATUS_SUCCESS';
export const UPDATE_DEVICE_STATUS_FAILURE = 'UPDATE_DEVICE_STATUS_FAILURE';

export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

/*
 * other constants
 */

export const DeviceStatus = {
  GOOD_STANDING: 'good-standing',
  MISSING: 'missing'
}

/*
 * action creators
 */

export function setLoading(isLoading) {
    return { type: SET_LOADING_STATUS, isLoading }
}

 // Add Device
export function addDevice(userId, name) {
  return { type: ADD_DEVICE, name, userId }
}

export function addNewDeviceSuccess(device) {
    return { type: ADD_DEVICE_SUCCESS, device }
}

export function addNewDeviceFailed(error) {
    return { type: ADD_DEVICE_FAILURE, error }
}

// Remove Device
export function removeDeviceSuccess(devices) {
    return { type: REMOVE_DEVICE_SUCCESS, devices }
}

export function removeDeviceFailed(error) {
    return { type: REMOVE_DEVICE_FAILURE, error }
}


// Device Status
export function updateDeviceStatus(deviceId, status) {
  return { type: UPDATE_DEVICE_STATUS, deviceId, status }
}

export function updateDeviceStatusSuccess(response) {
    return { type: UPDATE_DEVICE_STATUS_SUCCESS, deviceId: response.data.device_id, status: response.data.status }
}

export function updateDeviceStatusFailed(deviceId, status) {
    return { type: UPDATE_DEVICE_STATUS_FAILURE, deviceId, status }
}