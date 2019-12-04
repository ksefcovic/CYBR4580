class AuthorizeApiRequest
    prepend SimpleCommand
  
    def initialize(headers = {})
      @headers = headers
    end
  
    def call
      user
    end
  
    private
  
    attr_reader :headers
  
    def user
      @user ||= User.find(decoded_auth_token_user_id) if decoded_auth_token_user_id
      @user || errors.add(:token, 'Invalid token') && nil
    end
  
    def decoded_auth_token_user_id
      @decoded_auth_token_user_id ||= TokenManager.validate_token(http_auth_header) #JsonWebToken.decode(http_auth_header)
    end
  
    def http_auth_header
      if headers['X-Access-Token'].present?
        return headers['X-Access-Token'].split(' ').last
      else
        errors.add(:token, 'Missing token')
      end
      nil
    end
  end