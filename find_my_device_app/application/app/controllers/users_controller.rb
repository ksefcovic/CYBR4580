class UsersController < ApplicationController
  before_action :authenticate_user, except: [:login, :create, :submit_login, :submit_create, :logout] #:show

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
      request.headers['X-Access-Token'] = token
      #response.headers["X-Access-Token"] = token
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
    redirect_to root_path
  end

  def submit_login
    puts 'Submit login'
    email, password = params.values_at :email, :password
    if (user = User.find_by_email(email)&.authenticate(password))
      #token = token_manager.build(user.id)
      token = token_manager.generate_token(user.id)
      puts token
      
      request.headers['X-Access-Token'] = token
      initialize_auth(request.headers)

      puts "http_auth_header"
      puts http_auth_header #headers
      #response.headers["X-Access-Token"] = token
      redirect_to action: 'show', id: user.id
    else
      render json: {
        message: "username or password is incorrect.",
        email: email
      }, status: 404
    end
  end

  def show
    response.set_header('X-Access-Token', 'ezp1c2VyX2lkPT4iYmQ3MjQ0YTQtY2Q5OS00YTFkLTk2MjktOTlmYTNjZjU4YzE0In06MTU3NTA2MzczNzo3MDBhODA5N2I5MmM2ODlkOTk0NTYwNDA5NzBhNjEzMGIzZjMwYTMyYmFmYzUxODYxNjUxMDA4ZWFmYWY4ZWQz')
    # request.set_header('X-Access-Token', 'command.result')
    puts "THIS IS THE TOKEN IN HEADER FOR SHOW AND LONGER TO STAND OUT Header"
    puts headers['X-Access-Token'] #request.headers['X-Access-Token']
    puts headers
    puts "request"
    puts request.headers
    puts "response"
    puts response.headers
    # authenticate_user_2
    # @access_token = response.headers["X-Access-Token"]
    if current_user != nil && current_user.id != params[:id]
      @user = User.find_by_id(params[:id])
      @devices = Device.where(:user_id => @user.id)
    else
      #render html: '<div><h1>You do not have permission to access this account</h1></div>'.html_safe, status: 401
      #render :inline => '<h1>You do not have permission to access this account</h1>', status: 401
    end

    # render json: {
    #     user_id: @user.id,
    #     user_email: @user.email
    #   }, status: 200

    # if current_user == nil || current_user.id != params[:id]
    #   render json: {
    #     user_id: current_user.id,
    #     user_email: current_user.email
    #   }, status: 200
    # else
    #   # Route to login
    #   render json: {
    #     message: "You do not have access to this account!",
    #     current_user: current_user
    #   }, status: 404 #:forbidden
    #  end
  end

  # def authenticate_user_2
  #   #token = headers['X-Access-Token']
  #   token = 'ezp1c2VyX2lkPT4iYmQ3MjQ0YTQtY2Q5OS00YTFkLTk2MjktOTlmYTNjZjU4YzE0In06MTU3NTA2MzczNzo3MDBhODA5N2I5MmM2ODlkOTk0NTYwNDA5NzBhNjEzMGIzZjMwYTMyYmFmYzUxODYxNjUxMDA4ZWFmYWY4ZWQz'
  #   user_id = TokenManager.validate_token(token)
  #   if (user_id)
  #     @current_user = User.find(user_id)
  #   else
  #     throw :halt
  #   end
  #  #raise Exception unless (user_id = token_manager.verify(token))
  #   @current_user = User.find(user_id)
  # rescue
  #   render 'users/expired_session', status: :unauthorized
  #   # render json: {
  #   #     message: "Your session has expired, please login again",
  #   #     headers: request.headers['X-Access-Token'],
  #   #     token: token
  #   #   }, status: :unauthorized
  #   false
  # end

  # def logout
  # end
end
