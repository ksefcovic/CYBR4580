class StaticController < ApplicationController
    def index
        if current_user != nil
            redirect_to controller: 'users', action: 'show', id: current_user.id
        end
    end

    def redirect_to_documentation
        redirect_to "https://github.com/ksefcovic/CYBR4580"
    end

    def redirect_to_android_documentation
        redirect_to "https://github.com/ksefcovic/CYBR4580/tree/master/AndroidDocumentation"
    end
end