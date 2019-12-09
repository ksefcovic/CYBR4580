require 'json'

class TokenManager
  def self.generate_token(user_id)
    expire_time = Time.now + 2*60*60
    Base64.strict_encode64("#{user_id}:#{expire_time.to_i}:#{gen_enc_token(user_id.to_s, expire_time)}")
  end

  def self.validate_token(token)
    decoded_token = Base64.decode64(token)
    user_id, expire_time_s, enc_token = decoded_token.split(':')
    expire_time = Time.at(expire_time_s.to_i)
    return false unless Time.now < expire_time
    return false unless ActiveSupport::SecurityUtils.secure_compare(enc_token, gen_enc_token(user_id, expire_time))
    user_id
  rescue
    raise ActionController::BadRequest
  end

  private

  def self.gen_enc_token(user_id, create_time)
    raise ArgumentError unless user_id

    raw_token = JSON.dump({
      user_id: user_id,
      time: create_time.iso8601
    })
    OpenSSL::HMAC.hexdigest(
      'sha256',
      FindMyDeviceApp::Application.credentials.secret_key_base,
      raw_token
    )
  end
end