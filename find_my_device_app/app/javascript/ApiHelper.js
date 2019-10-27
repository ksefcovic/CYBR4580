const baseEndpoint = "http://localhost:3000/api/v1/"
export const ApiHelper = {
    UPDATE_STATUS_ENDPOINT: deviceId => baseEndpoint + "device/" + deviceId + "/set_status",
    ADD_DEVICE_ENDPOINT: baseEndpoint + "new_device/create",
    REMOVE_DEVICE_ENDPOINT: deviceId => baseEndpoint + "remove_device/" + deviceId,
  }
  