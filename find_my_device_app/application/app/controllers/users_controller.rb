class UsersController < ApplicationController
  before_action :authenticate_user, except: [:login, :create, :submit_login, :submit_create, :logout]

 # private

  def new
  end

  def create 
  end

  def all_users 
    @users = User.all
    render json: {
        message: @users
    }, status: 201
  end

  def submit_create
    first_name, last_name, email, username, password, confirm_password = params.values_at :first_name, :last_name, :email, :username, :password, :confirm_password
    if (!User.find_by_email(email))
      @new_user = User.new(:first_name => first_name, :last_name => last_name, :email => email, :username => username, :password => password)
      @new_user.save
      token = token_manager.generate_token(@new_user.id)
      cookies.signed['X-Access-Token'] = {value:  token, httponly: true, expires: 2.hour.from_now}
      redirect_to action: 'show', id: @new_user.id
    else
      render json: {
        message: "user already exists."
      }, status: :forbidden
    end
  end

  def login 
    puts 'Login'
  end

  def logout
    current_user = nil
    cookies.signed['X-Access-Token'] = {value:  "", httponly: true}
    redirect_to root_path
  end

  def submit_login
    puts 'Submit login'
    email, password = params.values_at :email, :password
    if (user = User.find_by_email(email)&.authenticate(password))
      #token = token_manager.build(user.id)
      token = token_manager.generate_token(user.id)

      cookies.signed['X-Access-Token'] = {value:  token, httponly: true, expires: 2.hour.from_now}
    
      redirect_to action: 'show', id: user.id
    else
      render 'users/credentials_error', status: :unauthorized
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

  def show
    if current_user != nil && current_user.id == params[:id]
      @user = User.find_by_id(params[:id])
      @devices = map_devices(Device.where(:user_id => @user.id))
      @device_types = DeviceType.all

    else
      render 'users/login', status: :unauthorized
    end
  end
end
