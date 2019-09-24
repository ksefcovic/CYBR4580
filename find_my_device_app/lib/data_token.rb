class DataToken < TokenBuilder
    include InitLater
  
    def initialize(extract_data = ->(x) { x }, token_builder)
      @token_builder = token_builder
      @extract_data = extract_data
    end
  
    def build(data)
      cons(extract_data.(data), token_builder.build(data))
    end
  
    def verify(token)
      token_builder.verify(cdr(token)) && car(token)
    end
  
    private
  
    attr_reader :token_builder, :extract_data
  end