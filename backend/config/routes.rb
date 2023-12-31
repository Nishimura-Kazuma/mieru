Rails.application.routes.draw do
  resources :samples
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :post, only: [:index, :show, :create, :update, :destroy]
  resources :comment, only: [:create, :update, :destroy]
  resources :user, only: [:show]
end
