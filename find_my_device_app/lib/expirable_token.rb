class ExpirableToken < TokenBuilder
    include InitLater
  
    def initialize(create_expiration = Time.now + 1.day, token_builder)
      @token_builder = token_builder
      @create_expiration = create_expiration
    end
  
    def build(data)
      cons(create_expiration.to_s, token_builder.build(data))
    end
  
    def verify(token)
      expiration = car(token)
      return false unless Time.now.to_s < expiration
  
      token_builder.verify(cdr(token))
    end
  
    private
  
    attr_reader :token_builder, :create_expiration
  end