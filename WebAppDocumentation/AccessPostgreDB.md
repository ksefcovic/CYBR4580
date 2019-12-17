# Access PostgreSQL Database
----------------------------------------------------------------------------------

####Note: For most instances, you will probably not need to access the database directly, see documentation file UsingRailsConsoleToViewEntries.md for information on using the rails console to view and add entries to the database. Additionally, there shouldn't be any reason to create tables directly in the Postgres console, use rails migrations (See documentation).

## Step 1: Connect to AWS ec2 Instance
- See documentation file ConnectToAWS.md

## Step 2: Execute psql command
- Execute: `psql USER_NAME`
