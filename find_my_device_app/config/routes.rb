Rails.application.routes.draw do
  root 'static#index'

  get 'home/:user', to: 'static#index'
  get 'login', to: 'users#login'
  get 'create_user', to: 'users#create'
  get 'login/submit', to: 'users#submit_login'
  get 'logout', to: 'users#logout'
  post 'create_user/submit', to: 'users#submit_create'
  post 'new_device/register', to: 'devices#build_partial_registration'
  get 'pending_devices', to: 'devices#pending_devices'
  get 'registered_devices', to: 'devices#registered_devices'
  #build_partial_registration

  # get 'home/:user', to: 'static#index'
  # get 'login', to: 'users#login'
  # get 'create_user', to: 'users#create'
  # get 'login/submit', to: 'users#submit_login'
  # get 'logout', to: 'users#logout'
  # post 'create_user/submit', to: 'users#submit_create'

  get 'user/:id', to: 'users#show'
  get 'logout', to: 'users#logout'

  namespace :api, defaults: { format: 'json'} do 
    namespace :v1 do
      get 'user/:id', to: 'users#user'
      post 'login', to: 'users#login'
      post '/create_user' => 'users#create'

      post 'register' => 'devices#register_device'
      post 'check_status' => 'devices#check_device_status'
    end
  end
end
