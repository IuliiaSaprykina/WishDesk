class User < ApplicationRecord
    has_many :user_wishe
    has_many :whishes, through: user_wishe
    has_secure_password
end
