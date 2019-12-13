# Device Finder
## Executive Summary
Devices are stolen every day whether it be phones, laptops or others. There have been apps created to locate devices, but these applications are usually created for phones and not so much other mobile devices such as tablets or laptops. While these efforts can help law enforcement to a certain extent, if the device is wiped, the device may not work for this as they are account based and not hardware based. This leads to frustration by both the owner and law enforcement as they struggle to locate stolen merchandise and return it to the proper location.

Device Finder is an OS based firmware solution that allows devices to be located whether they have been factory reset or are still in the condition in which they were stolen. Device Finder works by discovering device locations based off the IMEI on their network card and sending IP location to authorities. 

## Project Goals
* Find and manipulate Android open source NIC libraries
* Create database for storing user information 
* Create web app for user interfacing
* Create android app for authenticating with web services
* Create alerting system for notification of authorities

## Project Methodology
Our methodology was to split into two groups. One group tackled the issue of building the web infrastructure, the other worked on using the Android OSP framework needed make the calls work. Once that was finished, we began working on the app that a user would need to download to their device to authenticate and begin sending location information to our web environment

## Results / Findings

* Successfully created the web applications and installed it on an EC2 instance in AWS. 
* Successfully compiled AOSP onto emulator and sent test information to web instance. 
* Created android application for authenticating and sending information to web. 
* Successfully created a working prototype with documentation on how to scale up to any size.

## Install Instructions
### Requirements
(list of any software / hardware requirements necessary to run the code/app/etc)
* Docker
* Ruby
* Android Open Source Project (all requirements needed. Can probably link this somewhere)
	Download AOSP and make a 
* Android Emulator
* Postresql
* Yarn

### Installation Instructions
(list of steps to install the product/app/code/etc)

# User DeviceFinder Installation Guide
1. Go to the directory you want to run the emulator from and pull the source code to.
2. Download the install script:
```bash
wget https://raw.githubusercontent.com/ksefcovic/CYBR4580/master/DeviceFinderInstaller.sh
```
3. Make the script executable and run it:
```bash
chmod +x DesviceFinderInstaller.sh && ./DeviceFinderInstaller.sh
```
4. Start the android emulator:
```bash
cd AospSource
emulator
```

*LAUREN ADDS WEB INSTALL STUFF


### Getting started
(list of any steps to run the code after installation and/or manage the apps over their lifecycle)
