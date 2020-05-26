class UserWishesController < ApplicationController
    def index
        authorization_header = request.headers["Authorization"]
        if !authorization_header
            render json: { error: "No token"}, status: :unauthorized
        elsif
            token = authorization_header.split(" ")[1]
            secret = Rails.application.secrets.secret_key_base
            begin
                payload = JWT.decode(token, secret).first
            rescue
                render json: { error: "Oops..."}, status: :unauthorized
            end
        end
    end
end
