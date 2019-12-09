class AddTypeToDevice < ActiveRecord::Migration[6.0]
  def change
    add_column :devices, :type_name, :string, null: false, default: ""
    add_column :devices, :type_photo_url, :string, null: false, default: ""
  end
end
