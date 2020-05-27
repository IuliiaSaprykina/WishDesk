class UserWishesController < ApplicationController
    def index
        @user_wishes = UserWish.all 
        authorization_header = request.headers["Authorization"]
        if !authorization_header
            render json: { error: "No token" }, status: :unauthorized
        else
            token = authorization_header.split(" ")[1]
            secret = Rails.application.secrets.secret_key_base
            begin
                payload = JWT.decode(token, secret)[0]
                render json: { user_wishes: @user_wishes }
            rescue
                render json: { error: "Invalid token" }, status: :unauthorized
            end
        end
    end

    def create
        @user_wish = UserWish.create(
            user_id: params[:user_id],
            wish_id: params[:wish_id]
        )

        render json: { user_wish: @user_wish }
    end
end
