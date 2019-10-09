Rails.application.routes.draw do
  root 'static#index'

  namespace :api, defaults: { format: 'json'} do 
    namespace :v1 do
      get 'user/:id', to: 'users#user'
      post 'login', to: 'users#login'
      post '/create_user' => 'users#create'
    end
  end
  #API
  #get 'api/v1/user/:id' => 'api/v1/users#user'
  #UI
  #get '/signup' => 'users#new'
  #get '/user/:id' => 'users#show'
  #post '/create_user' => 'users#create'
  # resources :users, only: :show do
  #   post :login, on: :collection
  # end
end
