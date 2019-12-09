class AuthenticationController < ApplicationController
    #skip_before_action :authenticate_request
    #after_action: 
   
    def authenticate
      puts "CALL AUTHENTICATE USER"
      command = AuthenticateUser.call(params[:email], params[:password])
   
      if command.success?
        puts "COMMMAND RESULTS"
        puts params[:email]
        puts params[:password]
        puts command.result
        #response.headers["X-Access-Token"] = command.result
        # response.set_header('X-Access-Token', command.result)
        # request.set_header('X-Access-Token', command.result)
        # response.set_header('X-Access-Token', 'testfromauth')
        # request.set_header('X-Access-Token', 'testfromauth')
        #headers["X-Access-Token"] = command.result
        #render json: { auth_token: command.result }

       # cookies.signed['X-Access-Token'] = {value:  command.result, httponly: true, expires: 1.hour.from_now}
        user = User.find_by_email(params[:email])
        redirect_to :controller => 'users', :action => 'show', id: user.id
        #redirect_to action: 'show', id: @new_user.id
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end

    # def authenticate_user
    #     @authenticate_user = Commands::AuthenticateUser.new
    # end
   end