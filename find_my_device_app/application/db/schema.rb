# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_09_053946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "device_types", force: :cascade do |t|
    t.string "name"
    t.string "photo_url"
  end

  create_table "devices", force: :cascade do |t|
    t.string "name", default: "MyDevice"
    t.string "status", default: "good-standing"
    t.string "mac_address"
    t.string "imei", default: ""
    t.json "known_locations", default: [], array: true
    t.string "registration_status", default: "pending"
    t.string "registration_code", default: ""
    t.uuid "user_id", null: false
    t.bigint "device_type_id"
    t.string "type_name", default: "", null: false
    t.string "type_photo_url", default: "", null: false
    t.index ["device_type_id"], name: "index_devices_on_device_type_id"
    t.index ["user_id"], name: "index_devices_on_user_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name", default: ""
    t.string "last_name", default: ""
    t.string "username", default: ""
    t.bigint "device_type_id"
    t.index ["device_type_id"], name: "index_users_on_device_type_id"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "devices", "users"
end
