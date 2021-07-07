class AuthenticationController < ApplicationController
   
    def authenticate
      command = AuthenticateUser.call(params[:email], params[:password])
   
      if command.success?
        user = User.find_by_email(params[:email])
        redirect_to :controller => 'users', :action => 'show', id: user.id
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end
  end