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
+ Find and manipulate Android open source project NIC libraries
+ Create database for storing user information
+ Create web app for user interfacing
+ Create alerting system for notification of device owner


Device Finder would help people get their stolen devices back. This could help cut down on device theft as it would be easier for law enforcement to gather information about stolen devices and their locations. Many applications exist for finding stolen phones, but this would help with other devices as well.

# Proposed project timeline

[Github project here](https://github.com/ksefcovic/CYBR4580/projects/1)

# Project-oriented risk list

|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|No Open Source NIC driver code | 9 | 3 | If we can't find an open source NIC general driver for Android we will have to reevaluate our project scope or focus on another platform |
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the NIC to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding the AOSP general NIC code | 4 | 6 | Our team has little knowledge on the AOSP and will  have to learn how it works |
| NIC Initialization  | 5 | 7 | On device initialization the NIC will not be connected to a network causing problems with the firmware update we are developing |

# Project methodology
For literature review we used the following key words:
+ Keywords
    - Android Open Source Project
    - Android firmware flashing
    - Android Open Source Project network drivers
    - Network sniffing
    - Device location
    - MAC spoofing
    - Database hardening
+ Relevant papers
    - Using mobiles for on campus location tracking (F. Aloul, A. Sagahyroon, 	A. Al-Shami, I. Al-Midfa, R. Moutassem)
    - Patent US7373425B2 (Craig Barrack, James Ching-Shau Yik, Rong-Feng Chang, Eric Lin )
    - Investigation of multi-device location spoofing attacks on air traffic control and possible countermeasures (D. Moser, P. Leu, V. Lenders, A. Ranganathan, F. Ricciato, S. Capkun)
    - Decomposition of MAC address structure for granular device inference (J. Martin, E. Rye, R. Beverly)
    - A MAC-address Relaying NAT Router for PC Identification from Outside of a LAN (R. Murakami, N. Yamai, K. Okayama)
    - I know your MAC address: targeted tracking of individual using Wi-Fi (Mathieu Cunch)
    - Hardening web applications using a least privilege DBMS access model (Stuart Steiner, Daniel Conte de Leon, Ananth A. Jillepalli)
+ State of the art
    - A few applications exist that work similarly to the proposed application, but these work at the application level while the user is logged in to the phone. These applications work on IOS and through companies like Google. The user will have to have an account active on that device in order to make it work.
    - Dell utilizes a software called LoJack for Laptops, which runs when the system’s BIOS initializes and allows for device tracking (Dell).
    - Absolute office created a similar program that also runs upon BIOS initialization, but it allows for remote locking, wiping, and tracking of the device (Absolute Home and Office).
    - The implementation from Dell and Absolute Office were exploited by the LoJax malware in 2018 (WeLiveSecurity).

Our technical plan will work along these lines:
+ Find open source Android libraries relating to NIC general purpose driver
+ Modify the general purpose NIC driver to send MAC to server
+ Create server-side alerting code
+ Update application to scrape IP information, check if device is stolen, and potentially send notification
+ Create web application
    - Deploy rails-react app on aws
    - Configure token based authentication
    - Add functionality for user account creation
    - Allow user to register device MAC address
    - Allow user to mark device as “stolen”
    - Allow user to mark device as "found" (stolen value changed to false)
    - Create endpoints to retrieve list of stolen devices
+ Create database
    - Create PostgreSQL database
+ Setup listener to gather user information
+ Setup alerting for when MAC has been located
+ Send IP and MAC information to device owner

# Resources/Technology needed

|Resource  | Dr. Hale needed? | Investigating Team member | Description |
|-------------------|---------|---------------------------|-------------|
|Android Studios | No | Dylan  and Aaron | Android Studio lets you develop for Android  |
|Android emulator | No | Dylan | We will need an emulator to flash the updated firmware too |
|Android device (optional) | No | Dylan and Aaron | If we want to test the firmware on a physical device |
|Virtual Private Server | No | Kevin and Lauren | We will need a virtual private server (VPS) in order to host our web app, the database, and the alerting application |

#Works Cited

“Absolute Home & Office - Leader in Data and Device Protection.” Absolute Home and Office, 2019, homeoffice.absolute.com/.

Dell. “LoJack for Laptops.” Dell, 2019, www.dell.com/content/topics/segtopic.aspx/lojack?c=us&l=en&cs=19.

“LoJax: First UEFI Rootkit Found in the Wild, Courtesy of the Sednit Group.” WeLiveSecurity, ESET Research, 9 Oct. 2018, www.welivesecurity.com/2018/09/27/lojax-first-uefi-rootkit-found-wild-courtesy-sednit-group/.
