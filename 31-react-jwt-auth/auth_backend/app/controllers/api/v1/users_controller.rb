class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def profile
        render json: { user: current_user }, status: :accepted 
    end

    def create # sign up
        @user = User.create(user_params)
        # byebug
        if @user.valid? 
            @token = encode_token(user_id: @user.id)
            render json: { user: @user, jwt: @token }, status: :created
        else 
            messages = @user.errors.full_messages
            render json: { error: 'You messed up', messages: messages }, status: :not_acceptable
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :avatar, :bio)
    end
end
