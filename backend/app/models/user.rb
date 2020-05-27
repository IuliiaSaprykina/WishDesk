class User < ApplicationRecord
    has_many :user_wishes
    has_many :wishes, through: :user_wishes
    has_secure_password
    validates :username, uniqueness: true
end
