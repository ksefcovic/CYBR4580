module InitLater
    module ClassMethods
      def with(*curried_args)
        klass = self
        ClassFromHash.build(
          'self.new': ->(*args) {
            klass.new(*curried_args.concat(args))
          }
        )
      end
    end
  
    def self.included(base)
      base.extend(ClassMethods)
    end
  end