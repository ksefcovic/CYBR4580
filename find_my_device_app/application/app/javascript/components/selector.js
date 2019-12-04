import { createSelector } from 'reselect'


const getDevices = state => state.userDevices;

const getRegisteredDevices = createSelector(
  [getDevices],
  (devices) => devices
)

const mapStateToProps = state => {
  return {
    userDevices: getRegisteredDevices(state)
  }
}

export default mapStateToProps;