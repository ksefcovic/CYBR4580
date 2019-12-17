require 'token_manager'

class ApplicationController < ActionController::API
  attr_accessor :current_user
  include ::ActionController::Cookies

  private

  def authenticate_user
    token = cookies.signed['X-Access-Token']
    user_id = TokenManager.validate_token(token)
    if (user_id)
      @current_user = User.find_by_id(user_id)
    else
      throw :halt
    end
  rescue
    render 'users/expired_session', status: :unauthorized
    false
  end

  def token_manager
    @_token_manager = TokenManager
  end
end
