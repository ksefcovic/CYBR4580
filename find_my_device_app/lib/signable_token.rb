class SignableToken < TokenBuilder
    def initialize(token_builder)
      @token_builder = token_builder
    end
  
    def build(data)
      base_token = token_builder.build(data)
      cons(compute_signature(base_token), base_token)
    end
  
    def verify(token)
      signature = car(token)
      base_token = cdr(token)
      return false unless ActiveSupport::SecurityUtils.secure_compare(signature, compute_signature(base_token))
  
      token_builder.verify(base_token)
    end
  
    private
  
    attr_reader :token_builder
  
    def compute_signature(token)
      OpenSSL::HMAC.hexdigest(
        'sha1',
        FindMyDeviceApp::Application.credentials.secret_key_base,
        token
      )
    end
  end