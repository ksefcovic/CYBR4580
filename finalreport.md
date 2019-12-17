# Device Finder
## [Project Realization Progress Report](https://github.com/ksefcovic/CYBR4580/blob/master/Milestone-3.md)
## Executive Summary
Devices are stolen every day whether it be phones, laptops or others. There have been apps created to locate devices, but these applications are usually created for phones and not so much other mobile devices such as tablets or laptops. While these efforts can help law enforcement to a certain extent, if the device is wiped, the device may not work for this as they are account based and not hardware based. This leads to frustration by both the owner and law enforcement as they struggle to locate stolen merchandise and return it to the proper location.

Device Finder is an OS based firmware solution that allows devices to be located whether they have been factory reset or are still in the condition in which they were stolen. Device Finder tracks registered devices by registering their IMEI/MEID and having the device send location updates whenever it connects to a new network.

## Project Goals
* Find and manipulate Android open source NIC libraries
* Create a database for storing user information
* Create a web app for user interfacing
* Create an android app for authenticating with web services
* Create an alerting system for notification of authorities

## Project Methodology
Our methodology was to split into two groups. One group tackled the issue of building the web infrastructure, the other worked on using the Android Open Source Project to gather GPS information and send it to the server. Once that was finished, we began working on the app that a user would need to download to their device to authenticate and begin sending location information to our web environment

## Results / Findings

* Successfully created the web applications and installed it on an EC2 instance in AWS.
* Successfully compiled AOSP onto the emulator and sent test information to web instance.
* Created an android application for authenticating and sending information to the web.
* Successfully created a working prototype with documentation on how to scale up to any size.
* Created installation documentation for the web application and endpoint application.

## Install Instructions
### Requirements
(list of any software / hardware requirements necessary to run the code/app/etc)
#### AOSP
* At least 400 gigabytes of storage for the AOSP source tree
* At least 8 CPU threads
* At least 32 gigabytes of RAM
* An Ubuntu 19+ installation
* A sudo capable account

The installation script will take care of the rest of the requirements.

### User DeviceFinder Installation Guide
#### [Android Open Source Project installation guide](https://github.com/ksefcovic/CYBR4580/blob/master/AndroidDocumentation/User-GetRunning.md)
1. Go to the directory you want to run the emulator from and pull the source code too.
2. Download the install script:
```bash
wget https://raw.githubusercontent.com/ksefcovic/CYBR4580/master/DeviceFinderInstaller.sh
```
3. Make the script executable and run it:
```bash
chmod +x DeviceFinderInstaller.sh && ./DeviceFinderInstaller.sh
```
4. Start the android emulator:
```bash
cd AospSource
emulator
```

### Device Finder Registration Application
* [Link](https://github.com/lauren2020/device-finder-register-android) to the application that is used to register devices to the web application

#### Web Application
To run our app enviroment locally, start docker following these steps:

1. Ensure Docker is installed and running
2. Inside the check out repository, navigate to:
```CYBR4580/find_my_device_app```
3. Execute:
```docker-compose up```

API Documentation:
* [API Documentation](https://github.com/ksefcovic/CYBR4580/blob/master/WebAppDocumentation/API.md)

To use the registration android application with the web app, visit this repo:
 [Android Device Registration App Repo](https://github.com/lauren2020/device-finder-register-android)

## [Our Presentation](https://docs.google.com/presentation/d/1DFJBnu5zd9t3y2zkTosTLuBbeiVEJE5aVKu-hoNv9Hw/edit?usp=sharing)
