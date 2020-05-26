class Wish < ApplicationRecord
    has_many :user_wishe
    has_many :users, through: user_wishe
end
