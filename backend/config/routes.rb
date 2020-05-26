Rails.application.routes.draw do
  resources :user_wishes, only: [:index]
  resources :wishes
  resources :users, only: [:create, :index, :update];
  post "login", to: "authentication#login"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
