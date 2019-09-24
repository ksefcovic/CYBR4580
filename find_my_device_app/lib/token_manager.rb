require 'json'

class TokenManager
  def self.generate_token(user_id)
    create_time = Time.now
    # Base64 encodes a token as [User's uuid, now in unix time, a signed token].join(':')
    Base64.strict_encode64("#{user_id}:#{create_time.to_i}:#{gen_enc_token(user_id.to_s, create_time)}")
  end

  def self.validate_token(token)
    user_id, create_time_s, enc_token = Base64.decode64(token).split(':')
    create_time = Time.at(create_time_s.to_i)
    return false unless 1.day.ago < create_time
    return false unless ActiveSupport::SecurityUtils.secure_compare(enc_token, gen_enc_token(user_id, create_time))
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