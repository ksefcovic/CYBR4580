class ClassFromHash
    def self.build(hash)
      Class.new do
        hash.each_pair do |name, v|
          f = v.is_a?(Proc) ? v : ->() { v }
          klass_method = (m = /self\.(.*)/.match(name)) && m[1]
          klass_method ? define_singleton_method(klass_method, &f) : define_method(k, &f)
        end
      end
    end
  end