Rails.application.routes.draw do
  root 'static#index'

  resources :devices

  get 'home/:user', to: 'static#index'
  get 'login', to: 'users#login'
  get 'create_user', to: 'users#create'
  get 'login/submit', to: 'users#submit_login'
  post 'login/submit', to: 'users#submit_login'
  get 'logout', to: 'users#logout'
  get 'users', to: 'users#all_users'
  post 'create_user/submit', to: 'users#submit_create'
  post 'new_device/register', to: 'devices#build_partial_registration'
  get 'pending_devices', to: 'devices#pending_devices'
  get 'registered_devices', to: 'devices#registered_devices'

  post 'authenticate', to: 'authentication#authenticate'

  post 'device/:device_id/set_status', to: 'devices#set_device_status'

  get 'user/:id', to: 'users#show'
  get 'logout', to: 'users#logout'

  namespace :api, defaults: { format: 'json'} do 
    namespace :v1 do
      get 'user/:id', to: 'users#user'
      post 'login', to: 'users#login'
      post '/create_user' => 'users#create'

      post 'new_device/create', to: 'devices#create'
      patch 'device/:device_id/set_status', to: 'devices#set_device_status'
      delete 'remove_device/:device_id', to: 'devices#delete_device'

      post 'register' => 'devices#register_device'
      post 'check_status' => 'devices#check_device_status'

      get 'device_types', to: 'devices#list_device_types'
      post 'device_type/create', to: 'devices#add_device_type'
    end
  end
end
