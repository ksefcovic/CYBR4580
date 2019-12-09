class AddDeviceTypeToDevice < ActiveRecord::Migration[6.0]
  def change
    add_reference :devices, :device_type, index: true
  end
end
