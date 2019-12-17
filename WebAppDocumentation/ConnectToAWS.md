# Connect to AWS
---------------------------------------------------------------------------
Public DNS: ec2-18-218-151-43.us-east-2.compute.amazonaws.com
Public IP: 18.218.151.43

Note: Instructions provided are for terminal access on Linux or macOS, accessing the ec2 instance from windows is a lot of work so you will probably want to run a Linux / ubuntu VM to access it. Otherwise, instructions for connecting on windows can be found at this link: 

## Step 1: Add KeyPair
- Add key pair to key file as outlined in the ConfiguringSecrets.md documentation file

## Step 2: Change Permission on .pem File
- Navigate to the directory the key pair is in
- Execute: `chmod 600 findMyDeviceAppKeyPair.pem`

## Step 3: Connect to Instance
- Ensure you are in the same directory as the .pem key pair you added previously
- Execute: `ssh -i findMyDeviceAppKeyPair.pem ubuntu@ec2-18-218-151-43.us-east-2.compute.amazonaws.com`

## Step 4: Create a User
- When you first enter the instance you will be logged in as the root ubuntu user
- To create your own user execute: `sudo adduser YOUR-USER-NAME`
- Then Execute: `sudo usermod -a -G sudo USER-NAME`
