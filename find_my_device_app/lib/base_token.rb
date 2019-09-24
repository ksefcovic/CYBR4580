class BaseToken < TokenBuilder
    def build(_data)
      cons('', '')
    end
  
    def verify(_data)
      true
    end
end