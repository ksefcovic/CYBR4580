class UsersController < ApplicationController
  before_action :authenticate_user, except: [:login, :create]

  def new
  end

  def create
    email, password = params.values_at :email, :password
    if (!User.find_by_email(email))
      @new_user = User.new(:email => email, :password => password)
      @new_user.save
      render json: {
        user_id: @new_user.id,
        user_email: @new_user.email,
        access_token: token_manager.build(user.id) #TokenManager.generate_token(@new_user.id)
      }, status: 201
    else
      render json: {
        message: "user already exists."
      }, status: :forbidden
    end
  end

  def login
    email, password = params.values_at :email, :password
    if (user = User.find_by_email(email)&.authenticate(password))
      render json: {
        user_id: user.id,
        user_email: user.email,
        access_token: token_manager.build(user.id) #TokenManager.generate_token(user.id)
      }, status: 201
    else
      render json: {
        message: "username or password is incorrect."
      }, status: :unauthorized
    end
  end

  def show
    if current_user.id == params[:id]
      render json: {
        user_id: current_user.id,
        user_email: current_user.email
      }, status: 201
    else
      # Route to login
      render json: {
        message: "You do not have access to this account!"
      }, status: :forbidden
    end
  end
end
