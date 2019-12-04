class BaseToken < TokenBuilder
    def build(_data)
      puts "base build"
      cons('', '')
    end
  
    def verify(_data)
      true
    end
end