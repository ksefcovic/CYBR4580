require 'digest/sha1'

class AuthManager
    def encrypt_password(password)
        Digest::SHA1.hexdigest(password)
    end
end