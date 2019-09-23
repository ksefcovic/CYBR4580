# Running Development Server
----------------------------------------------------------------------------------

### Step 1: Clone Repository & cd to it
- (If you havent already done so) Clone Repo: `git clone https://github.com/ksefcovic/CYBR4580.git`
- cd to Web App Directory: `cd CYBR4580`

### Step 2: Ensure Secret Files are Added'
- See documentation file ConfiguringSecrets.md

## Using Foreman (Recomended)
-------------------------------------------------------------------
### Step 3: Make Sure "foreman" is installed
- If you do not have foreman, execute: ``

### Step 4: Start the Server
- Execute: `foreman start -f Procfile`

## Not Using Foreman
-------------------------------------------------------------------
### Step 3: Run Local Development DB Setup Script
- This will allow the development enviorment to point to a postgres db you own locally
- Execute: `.WebappLocalSetup/configure_local_db.sh`
- Local DB Info:
    - Name: device_finder_development
    - Usernmae: admin
    - Password: admin_dev_password
    - Note: If you want to create your own local database, make sure to change the name, username, and password values in the database.yml file to match your configuration

### Step 4: Start the Server
- Execute: `cd find_my_device_app`
- Execute: `rails s -p 3000`
