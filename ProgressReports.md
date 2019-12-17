# Progress Report 24-Sept-2019
## Overview
Kevin
* Worked on developing diagrams for Milestone 2

Lauren  
* Worked with Kevin on developing a plan for the web application.
Dylan  
* Started work on looking at how to flash a custom ROM to an emulator


Aaron
* Started looking at the AOSP repository on source.android.com

## Outcomes
Kevin:
* Created a logical diagram and discussed with MLHale and team

Lauren  
* Ended with a plan for the goal of our web app and a plan of where to begin.

Dylan
* Learned that the compiled ROM must be made for the correct device

Aaron  
* Found the WifiMonitor and NetworkMonitor classes
* Found case handling for DHCP requests

## Hindrances
Kevin -

Lauren -

Dylan -

Aaron -

## Ongoing Risks

|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the device to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding AOSP and how everything works | 4 | 6 | Our team has little knowledge of the AOSP and will have to learn how it works |

# Progress Report 01-Oct-2019
## Overview
Kevin
* Created Mockups of the website in LucidCharts and uploaded to Invision environment

Lauren -
* Woked on developing the structure of the app.

Dylan -
* Looked into flashing a ROM to a physical device (Old Pixel XL)and caught up with Aaron on the AOSP info

Aaron
* Looked into the process for pulling the android source tree and importing the source into Android Studio.
## Outcomes
Kevin:
* Created mockups showing the 4 different screens required for our website to be operational
* Uploaded mockups to Invision and created links to the mockups to show functionality

Lauren
* Built the base structure of the app and broke out the react components.

Dylan  
* Pulled the android 10 release 3 source tree
* Started documenting the Android Studios environment


Aaron  
* Pulled the android 10 release 3 source tree
* imported the root folder of the local source into android studio

## Hinderances
Kevin
* Need to get a better understanding of HTML to create renderings of mockups

Lauren  
* Had webpack issues that took time to debug.

Dylan  
* Ran out of space on my laptop while I was pulling the repo, and learned that it must be run on a Linux machine

Aaron
* using repo (the source control system) to pull the code took roughly 6 hours
* Indexing the folder in android studio took roughly 2 hours

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the device to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding AOSP and how everything works | 7 | 8 | Our team has little knowledge of the AOSP and will have to learn how it works |


# Progress Report 08-Oct-2019
## Overview
Kevin
* Learned some HTML and began turning mockups into usable web pages

Lauren
* Worked on building out the react components.

Dylan  
* Started looking taking a deeper look at AOSP repo and determined the requirements needed to develop a custom ROM

Aaron
* Discovered that you are supposed to build a file and import that into android studio and that the build process was unsupported on my machine. So I created a virtual machine, pulled the source again, and used a tutorial to build the file for android studio.

## Outcomes
Kevin
* Created three of the four HTML documents necessary for the website.
* Examined Bootstrap CSS and added design elements

Lauren
* Got all of the react components connected to each other.

Dylan
* Set up a Linux virtual machine to start building and developing a custom ROM
* Looked into the android connectivity manager as a place to implement our code

Aaron  
* Started assembling documentation on how to get working on our android side of the project
* Pulled a copy of the source repository
* Imported the file into android studio

## Hinderances
Kevin
* Need to examine CSS documentation and make HTML documents more appealing

Lauren
*

Dylan  
* Similarly to Aaron, I had several problems while trying to build the repo. I spent a good amount of time after I had pulled on my windows machine realizing we had to build on Linux
* I had to spend 3 hours pulling the repo on my Linux VM

Aaron
* I didn’t find documentation regarding dependencies, so I spent hours debugging the build process
* The original tutorial I used was wrong and basically instructed me to build the entire source, which took 3.5 hours each time. I did this twice before finding a different tutorial that informed me of an idegen section of the makefile.
* Even after generating the file for the IDE, indexing took over an hour.

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the device to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding AOSP and how everything works | 7 | 8 | Our team has little knowledge of the AOSP and will have to learn how it works |



# Progress Report 15-Oct-2019
## Overview
Kevin
* Created container that holds information about the device and missing devices for users to see

Lauren
* Worked on adding Kevin's HTML work into the react components and started adding CSS.

Dylan
* Started the process for setting up the Pixel XL for development

Aaron
* Found the ConnectivityManager class and the nested NetworkCallback class, which has an onAvailable function.
* Made the file for our DeviceFinder class on GitHub.
* Found the documentation with all of the dependencies
* Started looking into ways to run the proof-of-concept code in an emulator or in android studio

## Outcomes
Kevin
* The Container was created using HTML and Bootstrap CSS libraries

Lauren
* Our react components started to take real shape and got some styles.

Dylan
* Unlocked the bootloader for the device
* Flashed TWRP Recovery to the device allowing for the custom ROM to easily be flashed once compiled.
* Started documentation on the phone set up

Aaron
* Continued updating the documentation.
* Found the ConnectivityManager NetworkCallback class and the onAvailable function, where we will drop our code.
* Created new documentation for compiling the source code for emulation and testing.

## Hinderances
Kevin
* Needed to examine Bootstrap libraries and learn as I went in order to create what was needed

Lauren  
* The android app for registering the devices cant be used on emulators because it requires the IMEI. This made testing more challenging.

Dylan  
* Many of the tutorials for flashing devices are from 2012 or 2013, so they aren’t always up to date

Aaron
* I never seem to find the official documentation for processes and such until the week after I spend a significant amount of time working on it (examples: the build process and dependencies), this creates a scenario where I have to revisit previously completed work to make sure it was done correctly and fix it if it was not.

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the device to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding AOSP and how everything works | 4 | 6 | Our team has little knowledge of the AOSP and will have to learn how it works |
|Issue running the proof-of-concept code in Android emulator | 7 | 9 | Our team has little knowledge or experience working with AOSP or its emulator and there have been many errors |

# Progress Report 5-Nov-2019
## Overview
Kevin
* Met with Dr. Hale and discussed Docker and discussed diagrams

Lauren
* Worked on docker setup

Dylan
* Continued to work on research for flashing a custom ROM to a device and emulator
* Installed a Ubuntu on a hard drive to allow for proper AOSP development, due to the high spec requirements

Aaron
* Worked on getting the Android Emulator to work as a means of seeing the modified log statements from logcat and looked over the log statements to determine where to insert our final endpoint code.

## Outcomes
Kevin
* Gained a better understanding of how to set up our environment
* Gained a more in-depth idea of what is required for the diagrams

Lauren
* Got a base setup for docker running

Dylan
* Set up a development environment to work on writing custom ROMs
* Gained a better understanding of flashing custom ROMs to emulators and physical devices

Aaron
* Successfully booted the custom ROM on the android emulator, found (what I believe is) the correct place to put our endpoint code based on the logcat output, and finished the compile source and android emulator documentation.

## Hinderances
Kevin
* N/A

Lauren  
* Learning docker at the same time as adding added some extra time to the setup.

Dylan  
* Setting up the environment for AOSP development is somewhat of a hassle because it requires such high specs to successfully be able to develop
* When I was adding the AOSP to Android Studio I ran into some indexing errors due to the source code being so large

Aaron
* Building AVD’s in Android Studio modifies an environment variable, which prevented me from running it on the general AVD. I was initially struggling to determine what was making the emulator go into a perpetual boot loop, but after reading through some large logs, I realized the emulator was set to run a different architecture than what I had compiled.

# Progress Report 12-Nov-2019
## Overview
Kevin
* Broke lifecycle diagram into two new diagrams and updated progress reports

Lauren
* Implemented map view for website when missing locations are added.

Dylan
* Working on research for how to get a GPS coordinate for the DeviceFinder class - Started looking at the android.location.Location class to gain an understanding of where long and lat can be accessed

Aaron
* Created the Device Finder hook in the ConnectivityService class, specifically the makeDefault function
* Created the DeviceFinder class and inserted the call to it at the end of ConnectivityService.makeDefault()
* Started the code to get a device's IMEI/MEID
* Started researching how to get a device's GPS coordinates

## Outcomes
Kevin
*  Created an Account Creation diagram showing the steps needed for the user to go from landing at the landing page to create an account and terminating when the user gains access to their home page
* Created a Register Device diagram showing steps needed for a user to register a new device on the webpage and terminating when the user has the device added
* Added a few more weeks to this document to assist teammates in keeping track of their updates

Lauren
* Missing locations now have a map view to display found coordinates.

Dylan
* Gained an understanding of how android applications can gain longitude and latitude from the android class

Aaron
* Created the functionality to pull a device's IMEI and started trying to get the device's GPS coordinates.

## Hinderances
Kevin
* N/A

Lauren  
* N/A

Dylan  
* Most of the examples for gaining the GPS data are on the user application level and not at the firmware level of where we are writing our code, so it is hard to get an example that fits our case well

Aaron
* There was a massive learning curve related to pulling information from system services and requesting system services.

# Progress Report 19-Nov-2019
## Overview
Kevin
* Discussed design documents with the group.
* Developed a plan for doing a security evaluation of our environment.

Lauren
* Worked on UI updates for web app and got advice from Dr. Hale on possible UI improvements.

Dylan
* Developed basic skeleton code for handling GPS data from the device

Aaron
* Testing the post request code
* Testing the existing GPS code
* Writing new GPS code
* Debugging the Post Request code
* Testing the GPS functionality

## Outcomes
Kevin
* Updated design documents to more accurately show what is being done with the processes.
* Ran Nmap scan against our network.

Lauren
* UI was improved from initial concept.

Dylan
* We now have a basic outline of code to return the latitude and longitude of the device, this still needs work to function properly

Aaron
* Finished debugging the Post request code and successfully sent a post request to the web application.

## Hinderances
Kevin
* N/A

Lauren  
* Was not sure how to make the UI better.

Dylan  
* The examples for getting GPS data from devices is often written in the application level, not in the firmware level. Thus the code must be fitted and arranged  to work at a lower level.

Aaron
* No experience or knowledge about post requests or how to implement it.

# Progress Report 26-Nov-2019
## Overview
Kevin
* Added information to the design documents.

Lauren
* Continued work on UI and updated authentication.

Dylan
* I Started to take a look at the Device Registration Application that is linked to account creation for our web app.
* I Started to gain a basic understanding of the Kotlin programming language

Aaron
* I fixed the GPS code and started looking into a race condition.

## Outcomes
Kevin
*  An improved visual guide for process flow.

Lauren
* Further improvement on UI and  better authentication in place.

Dylan
* Gaining a better understanding and trying to help the error reporting for our device registration Application
* Added error handling for if the user tries to enter a NULL registration code


Aaron
* Rewrote the getGPS function
* Debugged issues relating to the sending of NULL coordinate values in the post requests
* Discovered and started investigating a race condition

## Hinderances
Kevin
* N/A

Lauren  
* N/A

Dylan  
* I have never done development in Kotlin so that is a learning process
* I have a limited understanding of Android development, to begin with, and was given an application that I didn't initially develop so I have to decipher how all of the code works

Aaron
* Fighting a self-created race condition

# Progress Report 3-Dec-2019
## Overview
Kevin
* Examined Metasploit to find what we can use to attack our environment.

Lauren
* Fixed docker puma issue and continued UI work.

Dylan
* Determined what the issue was for our error handling for device registration and started to learn about handlers and loopers to try and fix the problem

Aaron
* Debugged the GPS and POST request code
* Fixed a race condition in the GPS and POST Request code that resulted in the sending of NULL coordinate values
* Cleaned up code -- getting rid of unnecessary code and optimizing the functions

## Outcomes
Kevin
* There are numerous apache and PostgreSQL modules in Metasploit that can be used.

Lauren
* Docker was running again and ui improved.

Dylan
* Gain an understanding of why the code is crashing and now have an idea of where to start looking on how to fix it

Aaron
* Fixed the race condition that resulted in NULL coordinate values being sent in the POST request.

## Hinderances
Kevin
* Not sure how to use Metasploit. I Will use this week to work on getting these to work.

Lauren  
* N/A

Dylan  
* Again, I have little understanding of Android application development and have only been using Kotlin for half a week now so I have to learn how handlers and loopers work

Aaron
* N/A

# Progress Report 10-Dec-2019
## Overview
Kevin
* Ran Burpsuite against the environment and examined findings.
* Worked on final deliverables.

Lauren
* Added DNS nad security certificate to website.

Dylan
* Added fixes for error handling in the device registration application.
* Gained better knowledge of Kotlin

Aaron
* Created an installation script that installs dependencies, pulls the AOSP repository, pulls the modified/added files (ConnectivityService.java and DeviceFinder.java), places those files in the correct directory, and makes the custom image.
* Create user documentation on how to "install" and run DeviceFinder for Android Emulator
* Changed the code to utilize HTTPS

## Outcomes
Kevin
*  Found routes path and used that to find publicly facing user information. Sent information to the team for remediation.

Lauren
* Website is now accesible through www.device_finder.com with https.

Dylan
* Fixed NULL value codes being sent in the device registration application
* Watched several videos and read articles on handlers trying to gain knowledge on passing information from background thread to UI thread.

Aaron
* Created user documentation for the Android endpoint code and created an installation script for users.
* Changed the code to utilize HTTPS

## Hinderances
Kevin
* Needed to update Burpsuite as it was not visually appealing.

Lauren  
* Was not familar with adding security certificates so took some extra time in learning.

Dylan  
* Most of the documentation and videos are in Java, not Kotlin so I have to try and fit the code to the other language
* After working several hours, asking for help from a friend who does Kotlin development I am still running into errors about running processes on the background thread.

Aaron
* N/A
