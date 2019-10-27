import { railsActions } from 'redux-rails'
import { 
    addDevice, 
    addNewDeviceSuccess, 
    addNewDeviceFailed, 
    updateDeviceStatus,
    updateDeviceStatusSuccess,
    updateDeviceStatusFailed,
    setLoading
} from './actions';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
    return {
      onAddDevice: (userId, name) => {
        console.log("Adding Device Action...")
        dispatch(setLoading(true))
        axios.post(`http://localhost:3000/api/v1/new_device/create`, { user_id: userId, name: name })
        .then(function (response) {
            dispatch(addNewDeviceSuccess(response))
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            dispatch(addNewDeviceFailed(error))
            dispatch(setLoading(false))
        });
      },
      onRemoveDevice: deviceId => {
        console.log("Removing Device Action...")
        dispatch(setLoading(true))
        fetch(`http://localhost:3000/api/v1/remove_device/${deviceId}`).then(
            response => response.json(),
            error => console.log(error)///dispatch(addNewDeviceFailed(error))
        ).then(json => {
                //dispatch(addNewDeviceSuccess(json))
                dispatch(setLoading(false))
            }
        )
      },
      onUpdateDeviceStatus: (deviceId, status) => {
        console.log("Updating Device Action...")
        dispatch(setLoading(true))
        axios.patch(`http://localhost:3000/api/v1/device/${deviceId}/set_status`, { status })
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
