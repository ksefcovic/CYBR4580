Rails.application.routes.draw do
  root 'home#index'
  get '/signup' => 'users#new'
  get '/user/:id' => 'users#show'
  post '/create_user' => 'users#create'
  resources :users, only: :show do
    post :login, on: :collection
  end
end
