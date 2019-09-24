class User < ApplicationRecord
  has_secure_password

  # before_save :encrypt_password
  # after_save :clear_password

  # def encrypt_password
  #   if password.present?
  #     self.salt = BCrypt::Engine.generate_salt
  #     self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
  #   end
  # end
  # def clear_password
  #   self.password = nil
  # end

  def as_json(options = {})
    super(options.merge({ except: %i[password password_digest] }))
  end
end
