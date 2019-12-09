import { railsActions } from 'redux-rails'
import { ApiHelper } from '../ApiHelper'
import { 
    addDevice, 
    addNewDeviceSuccess, 
    addNewDeviceFailed, 
    removeDeviceSuccess,
    removeDeviceFailed,
    updateDeviceStatus,
    updateDeviceStatusSuccess,
    updateDeviceStatusFailed,
    setLoading
} from './actions';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
    return {
      onAddDevice: (userId, name, device_type_id) => {
        dispatch(setLoading(true))
        axios.post(ApiHelper.ADD_DEVICE_ENDPOINT, { user_id: userId, name: name, device_type_id })
        .then(function (response) {
            dispatch(addNewDeviceSuccess(response.data.device))
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            dispatch(addNewDeviceFailed(error))
            dispatch(setLoading(false))
        });
      },
      onRemoveDevice: (deviceId, userId) => {
        dispatch(setLoading(true))
        axios.delete(ApiHelper.REMOVE_DEVICE_ENDPOINT(deviceId))
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(removeDeviceSuccess(response.data.devices))
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
            dispatch(setLoading(false))
        });
      },
      onUpdateDeviceStatus: (deviceId, status) => {
        dispatch(setLoading(true))
        axios.patch(ApiHelper.UPDATE_STATUS_ENDPOINT(deviceId), { status })
        .then(function (response) {
            console.log("SUCCES!", response);
            dispatch(updateDeviceStatusSuccess(response))
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("ERROR!", error);
            dispatch(updateDeviceStatusFailed(error))
            dispatch(setLoading(false))
        });
      }
    }
}

export default mapDispatchToProps;
