module Enumerable
    def fold(sym, base_val)
      reduce(base_val) { |acc, i| i.send(sym, acc) }
    end
  end
  
  
  
  class TokenBuilder
    DELIMITER = '.'.freeze
  
    def self.from(*klasses)
      klasses.fold(:new, BaseToken.new)
    end
  
    protected
  
    # appends a new layer of data to the token
    # data, AccessToken => AccessToken
    def cons(new_data, base_token)
      [new_data, base_token].map(&Base64.method(:strict_encode64)).join(DELIMITER)
    end
  
    # strips the top layer of data out of the token
    # AccessToken => data
    def car(token)
      token.split(DELIMITER).first.then(&Base64.method(:decode64))
    end
  
    # strips one layer of data out of token
    # AccessToken => AccessToken
    def cdr(token)
      token.split(DELIMITER).second.then(&Base64.method(:decode64))
    end
  end