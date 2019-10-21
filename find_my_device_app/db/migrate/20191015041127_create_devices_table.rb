class CreateDevicesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :devices do |t|
      t.string :name, default: "MyDevice"
      t.string :status, default: "good-standing"
      t.string :mac_address
    end
  end
end
