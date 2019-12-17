# API Documentation
----------------------------------------------------------------------------------

Base URL: https://www.device-finder.com

## Check Stolen Devices
------------------------------------------------------------------

### POST: /api/v1/check_status
#### Headers: None
#### Body: {
    latitude: String
    longitude: String
    imei: String
}
#### Returns: {
    message: [string indicating whether it was recorded or not]
}


## Register
----------------------------------------------------------------

### Initial Device Register
### POST: /new_device/register
#### Headers: None
#### Body: {
        "name": String,
        "user_id": String
}
#### Returns: {
        "name": String,
        "status": String,
        "mac_address": String?,
        "imei": String,
        "known_locations": [],
        "registration_status": String,
        "registration_code": String,
        "user_id": String
}

### Complete Device Registration
### POST: /api/v1/register
#### Headers: None
#### Body: {
    code: String,
    imei: String
}
#### Returns: 
[string indicating registration success]
