class Wish < ApplicationRecord
    has_many :user_wishes
    has_many :users, through: :user_wishes
end
