import { createSelector } from 'reselect'


const getDevices = state => state.userDevices;
const getCurrentUser = state => state.currentUser;
const getDeviceTypes = state => state.deviceTypes;

const getRegisteredDevices = createSelector(
  [getDevices],
  (devices) => devices
)

const mapStateToProps = state => {
  return {
    userDevices: getDevices(state),
    currentUser: getCurrentUser(state),
    deviceTypes: getDeviceTypes(state)
  }
}

export default mapStateToProps;