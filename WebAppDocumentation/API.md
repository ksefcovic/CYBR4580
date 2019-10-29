# API Documentation
----------------------------------------------------------------------------------

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


## All Devices
----------------------------------------------------------------

### GET: /devices
#### Headers: None
#### Body: None
#### Returns: [
    {
        "id": Int,
        "name": String,
        "status": String,
        "mac_address": String?,
        "imei": String,
        "known_locations": [],
        "registration_status": String,
        "registration_code": String,
        "user_id": String
    }
]

### Initial Register
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

### Complete Registration
### POST: /api/v1/register
#### Headers: None
#### Body: {
    code: String,
    imei: String
}
#### Returns: 
