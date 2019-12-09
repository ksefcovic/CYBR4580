class Api::V1::DevicesController < ApplicationController
    def register_device
        code, imei = params.values_at :code, :imei
        @device = Device.where(:registration_code => code)
        if (@device != nil) 
            @device.update(:imei => imei, :registration_status => "registered", :registration_code => "")
          render json: {
            device: @device
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
                timestamp: Time.zone.now()
            }
            device.update(:known_locations => device.known_locations << newLocation)
            device.save
            render json: {
                message: "Device info was recorded for missing deivce."
            }, status: 201
        else
            render json: {
              message: "Device is in good standing, no info recorded"
            }, status: 201
        end
    end

    def update
      id, attributes = params.values_at :id, :attributes
      status = attributes.values_at :status
      @device = Device.find_by_id(id)
      if @device.update(:status => status)
          render json: @device
      else
          render json: @device.errors, status: :unprocessable_entity
      end
  end

  def create
      name, user_id, device_type_id = params.values_at :name, :user_id, :device_type_id
      registration_code = generate_registration_code
    if (user_id != nil && user = User.find_by_id(user_id) != nil) 
        @new_device = Device.new(:name => name, :registration_code => registration_code, :user_id => user_id)
        @new_device.device_type_id = device_type_id
        if @new_device.save
          device_type = DeviceType.find_by_id(device_type_id)
          @new_device.type_name = device_type.name
          @new_device.type_photo_url = device_type.photo_url
          render json: { device: @new_device }, status: :created, location: device_url(@new_device)
        else
          render json: @new_device.errors, status: :unprocessable_entity
        end
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
              status: status,
              device_id: @device.id
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

  def map_devices(devices)
    @mapped_devices = []
    devices.each do |device|
      device_object = device
      device_type = DeviceType.find_by_id(device.device_type_id)
      if (device_type != nil)
        device_object["type_name"] = device_type.name
        device_object["type_photo_url"] = device_type.photo_url
      else
        unkown_device = DeviceType.find_by_id("1")
        device_object["type_name"] = unkown_device.name
        device_object["type_photo_url"] = unkown_device.photo_url
      end
      @mapped_devices << device_object
    end
    return @mapped_devices
  end

  def delete_device
    device_id = params.values_at :device_id
    @device = Device.find_by_id(device_id)
    user_id = @device.user_id
    if (Device.destroy(device_id))
      render json: { devices: map_devices(User.find_by_id(user_id).devices) }, status: 201
    else
      render json: { message: "Device could not be removed!" }, status: 500
    end
  end

  def add_device_type
    name, photo_url = params.values_at :name, :photo_url
    @new_device_type = DeviceType.new(:name => name, :photo_url => photo_url)

    if @new_device_type.save
      render json: @new_device_type, status: 201
    else
      render json: { message: "Device type could not be added!" }, status: 500
    end
  end

  def list_device_types
    @device_types = DeviceType.all
    render json: { device_types: @device_types }, status: 200
  end
end