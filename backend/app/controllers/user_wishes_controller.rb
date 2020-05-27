class UserWishesController < ApplicationController
    def index
        authorization_header = request.headers["Authorization"]
        if !authorization_header
            render json: { error: "No token" }, status: :unauthorized
        else
            token = authorization_header.split(" ")[1]
            secret = Rails.application.secrets.secret_key_base
            begin
                payload = JWT.decode(token, secret)[0]
                render json: { top_secret_stuff: "Oops..., #{payload['username']}" }
            rescue
                render json: { error: "Invalid token" }, status: :unauthorized
            end
        end
    end
end
