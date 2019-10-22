class AddImeiLocationsAndRegistrationToDevice < ActiveRecord::Migration[6.0]
  def change
    add_column :devices, :imei, :string, default: ""
    add_column :devices, :known_locations, :json, array: true, default: []
    add_column :devices, :registration_status, :string, default: "pending"
    add_column :devices, :registration_code, :string, default: ""
  end
end
