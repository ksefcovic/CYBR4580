#class ApplicationController < ActionController::Base
#end

require 'token_manager'

# Authentication handled with header: 'X-Access-Token'
class ApplicationController < ActionController::API
  attr_accessor :current_user

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  private

  def authenticate_user
    token = request.headers['X-Access-Token']
    #token = 'ezp1c2VyX2lkPT4iYmQ3MjQ0YTQtY2Q5OS00YTFkLTk2MjktOTlmYTNjZjU4YzE0In06MTU3NTA2MzczNzo3MDBhODA5N2I5MmM2ODlkOTk0NTYwNDA5NzBhNjEzMGIzZjMwYTMyYmFmYzUxODYxNjUxMDA4ZWFmYWY4ZWQz'
    user_id = TokenManager.validate_token(token)
    if (user_id)
      @current_user = User.find(user_id)
    else
      throw :halt
    end
   #raise Exception unless (user_id = token_manager.verify(token))
    @current_user = User.find(user_id)
  rescue
    #render 'users/expired_session', status: :unauthorized
    render json: {
        message: "Your session has expired, please login again",
        headers: request.headers['X-Access-Token'],
        token: token
      }, status: :unauthorized
    false
  end

  def token_manager
    @_token_manager = TokenManager
    #@_token_manager ||= TokenBuilder.from(DataToken, ExpirableToken.with(Time.now + 5.days), SignableToken)
  end
end
