class CreateDeviceType < ActiveRecord::Migration[6.0]
  def change
    create_table :device_types do |t|
      t.string :name
      t.string :photo_url
    end
  end
end
