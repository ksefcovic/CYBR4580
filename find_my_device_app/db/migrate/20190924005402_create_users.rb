class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    enable_extension :pgcrypto
    create_table :users, id: :uuid do |t|
      t.string :email, index: { unique: true }
      t.string :password_digest

      t.timestamps
    end
  end
end
