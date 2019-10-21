class DevicesController < ApplicationController
    def pending_devices 
        @devices = Device.where(:registration_status => "pending")
        render json: {
            unregistered_devices: @devices
        }, status: 201
    end

    def registered_devices 
        @devices = Device.where(:registration_status => "registered")
        render json: {
            unregistered_devices: @devices
        }, status: 201
    end

    def build_partial_registration
        name = params.values_at :name
        registration_code = generate_registration_code
        @new_device = Device.new(:name => name, :registration_code => registration_code)
        @new_device.save
        render json: {
            registration_code: registration_code
        }, status: 201
    end

    def generate_registration_code
        654321
    end
end