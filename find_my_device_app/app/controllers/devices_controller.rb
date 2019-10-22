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
        name, user_id = params.values_at :name, :user_id
        registration_code = generate_registration_code
        if (user_id != nil && User.find_by_id(user_id) != nil) 
            @new_device = Device.new(:name => name, :registration_code => registration_code, :user_id => user_id)
            @new_device.save
            render json: {
                registration_code: registration_code
            }, status: 201
        else
            render json: {
                message: "Device must belong to a user"
            }, status: 404
        end
    end

    def generate_registration_code
        (SecureRandom.random_number(9e5) + 1e5).to_i
    end

    def set_device_status
        device_id, status = params.values_at :device_id, :status
        if (status == "missing" || status == "pending-found" || status == "good-standing")
            if (device_id != nil && @device = Device.find_by_id(device_id))
                @device.update(:status => status)
                @device.save
                render json: {
                    message: "Device status updated to " + status
                }, status: 201
            else
                render json: {
                    message: "Device not found."
                }, status: 404
            end
        else
            render json: {
                message: "Device status " + status + " is invalid. Set status to 'missing', 'pending-found' or 'good-standing'"
            }, status: 404
        end
    end

    def show
        id = params.values_at :id
        @device = Device.find_by_id(id)
        render json: @device
    end

    def index
        @devices = Device.all
        render json: @devices
    end
end