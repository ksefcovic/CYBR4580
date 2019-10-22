import App from '../configureApp'
import { railsActions } from 'redux-rails'

const updateDeviceStatus = (id, status) => {
    console.log("Updating device status: ", id);
    App.dispatch(railsActions.update({
        resource: 'Devices',
        id: id,
        attributes: {
          status: status
        }
    }));
}

const addNewDevice = (user_id, name) => {
    console.log("Adding new device: ", user_id, " Name: ", name);
    App.dispatch(railsActions.create({
        resource: 'Devices',
        attributes: {
          name: name,
          user_id: user_id
        }
    }));
}

export default {
    updateDeviceStatus,
    addNewDevice
};
