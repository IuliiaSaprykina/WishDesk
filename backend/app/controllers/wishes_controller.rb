class WishesController < ApplicationController

    def index
        @wishes = Wish.all 

        render json: { wishes: @wishes}
    end

    def show
        @wishe = Wish.find([params[:id]])

        render json: { wish: @wishe}
    end

    
    
end
