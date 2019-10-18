Rails.application.routes.draw do
  root 'static#index'

  get 'home/:user', to: 'static#index'
  get 'login', to: 'users#login'
  get 'create_user', to: 'users#create'
  get 'login/submit', to: 'users#submit_login'
  get 'logout', to: 'users#logout'
  post 'create_user/submit', to: 'users#submit_create'

  get 'user/:id', to: 'users#show'
  get 'logout', to: 'users#logout'

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
