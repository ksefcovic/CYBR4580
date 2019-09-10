# Team members
| Name |
| ------ |
| Kevin Sefcovic |
| Lauren Shultz |
| Aaron Wurtele |
| Dylan Christiansen |

# Executive Project Summary
Devices are stolen every day whether it be phones, laptops or others. There have been apps created to locate devices, but these applications are usually created for phones and not so much other mobile devices such as tablets or laptops. While these efforts can help law enforcement to a certain extent, if the device is wiped, the device may not work for this as they are account based and not hardware based. This leads to frustration by both the owner and law enforcement as they struggle to locate stolen merchandise and return it to the proper location.

Device Finder is an OS based firmware solution that allows devices to be located whether they have been factory reset or are still in the condition in which they were stolen. Device Finder works by discovering device locations based off the MAC on their network card and sending IP location to authorities. 

Project Goals for proof of concept
+ Find and manipulate Android open source NIC libraries
+ Create database for storing user information 
+ Create web app for user interfacing
+ Create alerting system for notification of authorities


Device Finder would help people get their stolen devices back. This could help cut down on device theft as it would be easier for law enforcement to gather information about stolen devices and their locations. Many applications exist for finding stolen phones, but this would help with other devices as well.

# Proposed project timeline
+ Router work:
    - Create a branch of OpenWRT’s Github repository (done on 9/3)
    - Locate the section of code responsible for DHCP functionality
    - Add code that connects to the server and sends the MAC that was just given a lease
+ Virtual Private Server work:
    - Purchase a low cost Virtual Private Server to host the application on
    - Purchase a certificate for the server so traffic can be encrypted
    - Install the server’s OS
    - Configure the database for the application (?)
    - Configure the web server on the server (?)
    - OS patch management??
    - Harden the server
+ Web application
    - ??
+ Alerting functionality
    - Write the code for checking MAC against stolen list and verify functionality
    - Write code for pushing stolen list changes to router
    - Write code for sending stolen MAC found alert to alerting platform
+ Security testing (if we get there)
    - Ensure stolen MAC list is encrypted
    - Ensure alerting is encrypted
    - Ensure database doesn’t have leaks 

# Project-oriented risk list

# Project methodology

# Resources/Technology needed

# First sprint plan
