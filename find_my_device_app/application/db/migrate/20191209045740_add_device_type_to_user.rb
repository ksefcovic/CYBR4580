class AddDeviceTypeToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :device_type, index: true
  end
end
