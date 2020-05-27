Rails.application.routes.draw do
  resources :user_wishes, only: [:index, :create, :destroy, :show]
  resources :wishes, only: [:index, :show]
  resources :users, only: [:create, :index, :update, :show];
  post "login", to: "authentication#login"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
