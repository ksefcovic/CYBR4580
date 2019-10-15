class StaticController < ApplicationController
    def index
        if current_user != nil
            redirect_to controller: 'users', action: 'show', id: current_user.id
        end
    end
end