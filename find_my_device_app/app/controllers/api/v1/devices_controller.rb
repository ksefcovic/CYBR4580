class Api::V1::DevicesController < ApplicationController
    def register_device
        code, imei = params.values_at :code, :imei
        device = Device.where(:registration_code => code)
        if (device != nil) 
            device.update_attributes(:imei => imei, :registration_status => "registered", :registration_code => "")
            device.save
          render json: {
            device_status: device.registration_status,
            imei: imei
          }, status: 201
        else
          render json: {
            message: "Registration code could not be found."
          }, status: 404
        end
    end

    def check_device_status
        imei, latitude, longitude = params.values_at :imei, :latitude, :longitude
        if (imei == nil || imei == "") 
            render json: {
              message: "Bad Imei Given"
            }, status: 201
            return
        end
        device = Device.find_by_imei(imei)
        if (device == nil)
            render json: {
              message: "Device is not registered"
            }, status: 404
            return
        end
        if (device.status == "missing")
            newLocation = {
                latitude: latitude,
                longitude: longitude,
                timestamep: Now()
            }
            #device.known_locations.add(newLocation)
            #device.save
            render json: {
                message: "Device info was recorded for missing deivce."
            }, status: 201
        else
            render json: {
              message: "Device is in good standing, no info recorded"
            }, status: 201
        end
    end
end