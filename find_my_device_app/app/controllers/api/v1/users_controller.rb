class Api::V1::UsersController < ApplicationController
    before_action :authenticate_user

    def user 
        if current_user.id == params[:id]
            render json: {
              user_id: current_user.id,
              user_email: current_user.email
            }, status: 201
          else
            # Route to login
            render json: {
              message: "You do not have access to this account!"
            }, status: :forbidden
          end
    end
end