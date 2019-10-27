class UsersController < ApplicationController
  before_action :authenticate_user, except: [:login, :create, :submit_login, :submit_create, :show, :logout]

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
      # Account was successfully created, routeing to homepage
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
    response.headers["X-Access-Token"] = ""
    redirect_to root_path #controller: 'static', action: 'index'
  end

  def submit_login
    puts 'Submit login'
    email, password = params.values_at :email, :password
    if (user = User.find_by_email(email)&.authenticate(password))
      response.headers["X-Access-Token"] = token_manager.build(user.id)
      redirect_to action: 'show', id: user.id #home_path(:user @new_user)
    else
      render json: {
        message: "username or password is incorrect.",
        email: email
      }, status: :unauthorized
    end
  end

  def userHasValidToken 
    if current_user.id == params[:id]
      true
    else
      false
    end
  end

  def getCurrentUser
    if current_user.id == params[:id]
      current_user
    else
      # Route to login
      null
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    @devices = Device.where(:user_id => @user.id)
    #if current_user == nil || current_user.id != params[:id]
      # render json: {
      #   user_id: current_user.id,
      #   user_email: current_user.email
      # }, status: 201
    # else
    #   # Route to login
    #   render json: {
    #     message: "You do not have access to this account!"
    #   }, status: :forbidden
    #  end
  end

  def logout
  end
end
