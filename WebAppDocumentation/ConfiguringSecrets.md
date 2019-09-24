# Configuring Secrets
-----------------------------------------------------------------------------

## KeyPair.pem
- Place key pair file in the `keys` folder
- This will be used to connect to the aws ec2 instance

## master.key
- Place the master.key file in `find_my_device_app/config/master.key`
- This will provide secret_key_base for salting in token auth
- This will provide production db credential information
