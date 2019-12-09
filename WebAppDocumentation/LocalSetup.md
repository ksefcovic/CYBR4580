# Local Setup
-----------------------------------------------------------------------------
## Tool Suggestions
-----------------------------------------------------------------------
None of these are needed but if you are looking for some tools to make working in command line easier

## Dependencies
-----------------------------------------------------------------------
### Ruby
sudo apt-get install ruby2.6
sudo apt-get install ruby-dev

### Bundler 
sudo gem install bundler

### Rails
gem install rails -v 5.2.0

### Yarn
- Yarn is the package manager we are using, if you run into errors and look on stack overflow and other places, some solutions will tell you to run something with `npm` - dont use npm, use yarn commands in place.
- cd to `find_my_device_app` directory and execute: `yarn install`
- You may get errors or warkings that say peer dependencies are missing, use `yarn add [DEPENDENCY]` to add those

### Node
'yarn add node'

### Postgres
sudo apt-get install postgresql postgresql-contrib
sudo su - postgres
psql
CREATE DATABASE device_finder_prod;
CREATE USER admin WITH ENCRYPTED PASSWORD 'admin_prod_password';
GRANT ALL PRIVILEGES ON DATABASE device_finder_prod TO admin;
Exit


## Common Enviorment Debugging Fixes
----------------------------------------------------------------------------

### Remove node_modules and reinstall

### Run `bundle install`

### Run `rake asstes:precompile` so get debugging information if js components are not loading properly or you are experienceing webpack issues.
