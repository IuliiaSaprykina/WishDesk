class UsersController < ApplicationController

    def index
        @users = User.all 

        render json: { users: @users}, include: [:wishes]
    end

    def show
        @user = User.find(params[:id])

        render json: { user: @user }, include: [:wishes]
    end

    def create
        @user = User.new(
             name: params[:name],
             username: params[:username],
                password: params[:password],
         )
        
        if @user.save
            render json: {user: @user}
        else
            render json: { error: "Some error" }, status: :bad_request
        end
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

    def destroy
        @user = User.find(params[:id])

        @user.destroy
        render json: { message: "User have been deleted" }
    end

end
