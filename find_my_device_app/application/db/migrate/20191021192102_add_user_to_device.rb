class AddUserToDevice < ActiveRecord::Migration[6.0]
  def change
    add_reference :devices, :user, null: false, type: :uuid, foreign_key: true
  end
end
