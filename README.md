# Team members
| Name |
| ------ |
| Kevin Sefcovic |
| Lauren Shultz |
| Aaron Wurtele |
| Dylan Christiansen |

# Executive Project Summary
Devices are stolen every day whether it be phones, laptops or others. There have been apps created to locate devices, but these applications are usually created for phones and not so much other mobile devices such as tablets or laptops. While these efforts can help law enforcement to a certain extent, if the device is wiped, the device may not work for this as they are account based and not hardware based. This leads to frustration by both the owner and law enforcement as they struggle to locate stolen merchandise and return it to the proper location.

Device Finder is an OS based firmware solution that allows devices to be located whether they have been factory reset or are still in the condition in which they were stolen. Device Finder works by sending MAC addresses to a private server that checks to see if the device has been marked as missing and then, if the device has been previously marked as missing, it alerts the owner with location information.

Project Goals for proof of concept
+ Find and manipulate Android open source NIC libraries
+ Create database for storing user information 
+ Create web app for user interfacing
+ Create alerting system for notification of authorities


Device Finder would help people get their stolen devices back. This could help cut down on device theft as it would be easier for law enforcement to gather information about stolen devices and their locations. Many applications exist for finding stolen phones, but this would help with other devices as well.

# Proposed project timeline

[Github project here](https://github.com/ksefcovic/CYBR4580/projects/1)

+ Android NIC Firmware work:
    - Find repository for AOSP NIC general driver
    - Fork the repository
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
    - Write code for sending stolen MAC found alert to alerting platform
+ Security testing (if we get there)
    - Properly sanitize input
    - Ensure stolen MAC list is encrypted
    - Ensure alerting is encrypted
    - Ensure database doesn’t have leaks

# Project-oriented risk list

# Project methodology
For literature review we used the following key words:
+ Keywords
+ Android Open Source Project
+ Android firmware flashing
+ Android Open Source Project network drivers
+ Network sniffing
+ Device location
+ MAC spoofing
+ Database hardening
Relevant papers
+ Using mobiles for on campus location tracking (F. Aloul, A. Sagahyroon, 	A. Al-Shami, I. Al-Midfa, R. Moutassem) 
+ Patent US7373425B2
+ Investigation of multi-device location spoofing attacks on air traffic control and possible countermeasures (D. Moser, P. Leu, V. Lenders, A. Ranganathan, F. Ricciato, S. Capkun)
+ Decomposition of MAC address structure for granular device inference (J. Martin, E. Rye, R. Beverly)
+ A MAC-address Relaying NAT Router for PC Identification from Outside of a LAN (R. Murakami, N. Yamai, K. Okayama)
State of the art
+ A few applications exist that work similarly to the proposed application, but 

Our technical plan will work along these lines:
+ Find open source Android libraries and modify them to send MAC to server
+ Create alerting code
+ Update application to scrape IP information and send notification
+ Create web application 
    - Need account creation
    - User device MAC location
    - Send information to database server
    - Allow user to mark device as “stolen”
    - Allow user to unmark device as “stolen”
+ Create database server
    - Purchase and install OS
    - Write application database to store user information
+ Setup listener to gather user information
+ Setup alerting for when MAC has been located
+ Send IP and MAC information to “Authorities”

# Resources/Technology needed