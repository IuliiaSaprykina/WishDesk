class UsersController < ApplicationController

    def index
        @users = User.all 

        render json: { users: @users}
    end

    def show
        @user = User.find(params[:id])

        render json: @user
    end

    def create
        @user = User.create(
            name: params[:name],
            username: params[:username],
            password: params[:password],
        )

        render json: {user: @user}
    end

    def update
        @user = User.find(params[:id])
        @user.update(
            name: params[:name],
            username: params[:username],
            password: params[:password],
        )

        render json: {user: @user}
    end

end
