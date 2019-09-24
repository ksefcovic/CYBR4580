Rails.application.routes.draw do
  root 'home#index'
  #API
  get 'api/v1/user/:id' => 'api/v1/users#user'
  #UI
  resources :users
  get '/signup' => 'users#new'
  get '/user/:id' => 'users#show'
  post '/create_user' => 'users#create'
  resources :users, only: :show do
    post :login, on: :collection
  end
end
