# Running Development Server
----------------------------------------------------------------------------------

### Step 1: Clone Repository & cd to it
- (If you haven't already done so) Clone Repo: `git clone https://github.com/ksefcovic/CYBR4580.git`
- cd to Web App Directory: `cd CYBR4580`

### Step 2: Ensure Secret Files are Added'
- See documentation file ConfiguringSecrets.md

### Step 3: Run Local Development DB Setup Script
- This will allow the development environment  to point to a Postgres DB you own locally
- Create a Local Postgres DB with Info:
    - Name: device_finder_dev
    - Username: admin
    - Password: admin_dev_password
    - Note: If you want to create your own local database info, make sure to change the name, username, and password values in the database.yml file to match your configuration

### Step 4: Start the Server
- Execute: `cd find_my_device_app`
- Execute: `rails s -p 3000`
