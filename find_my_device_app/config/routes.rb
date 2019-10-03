Rails.application.routes.draw do
  root 'static#index'
  #API
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'user/:id', to: 'users#user'
      post '/create_user', to: 'users#create'
      resources :users, only: :show do
        post :login, on: :collection
      end
    end
  end

  #get 'api/v1/user/:id' => 'api/v1/users#user'
  #UI

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  # get '/signup' => 'users#new'
  # get '/user/:id' => 'users#show'
  # post '/create_user' => 'users#create'
  # resources :users, only: :show do
  #   post :login, on: :collection
  # end
end
