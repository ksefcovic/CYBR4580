# Progress Report 24-Sept-2019
## Overview
Kevin 
* Worked on developing diagrams for Milestone 2

Lauren  
* 

Dylan  
* Started work on looking at how to flash a custom ROM to an emulator


Aaron 
* Started looking at the AOSP repository on source.android.com

## Outcomes
Kevin:
* Created a logical diagram and discussed with MLHale and team

Lauren  
* 


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
|No Open Source NIC driver code | 9 | 3 | If we can't find an open source NIC general driver for Android we will have to reevaluate our project scope or focus on another platform |
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the NIC to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding the AOSP general NIC code | 4 | 6 | Our team has little knowledge on the AOSP and will have to learn how it works |
| NIC Initialization  | 5 | 7 | On device initialization the NIC will not be connected to a network causing problems with the firmware update we are developing |

# Progress Report 01-Oct-2019
## Overview
Kevin 
* Created Mockups of website in LucidCharts and uploaded to Invision environment

Lauren - 
*


Dylan - 
* Looked into flashing a ROM to a physical device (Old Pixel XL)and caught up with Aaaron on the AOSP info

Aaron 
* Looked into the process for pulling the android source tree and importing the source into Android Studio.
## Outcomes
Kevin:
* Created mockups showing the 4 different screens required for our website to be operational
* Uploaded mockups to Invision and created links to the mockups to show functionality

Lauren 
* 

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
* 
Dylan  
* Ran out of space on my laptop while I was pulling the repo, and learned that it must be run on a Linux machine 
Aaron 
* using repo (the source control system) to pull the code took roughly 6 hours
* Indexing the folder in android studio took roughly 2 hours

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|No Open Source NIC driver code | 9 | 3 | If we can't find an open source NIC general driver for Android we will have to reevaluate our project scope or focus on another platform |
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the NIC to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding the AOSP general NIC code | 4 | 6 | Our team has little knowledge on the AOSP and will  have to learn how it works |
| NIC Initialization  | 5 | 7 | On device initialization the NIC will not be connected to a network causing problems with the firmware update we are developing |


# Progress Report 08-Oct-2019
## Overview
Kevin 
* Learned some HTML and began turning mockups into usable web pages

Lauren
* 

Dylan  
* Started looking taking a deeper look at AOSP repo and determined the requirements needed to develop a custom ROM

Aaron
* Discovered that you are supposed to build a file and import that into android studio and that the build process was unsupported on my machine. So I created a virtual machine, pulled the source again, and used a tutorial to build the file for android studio. 

## Outcomes
Kevin
* Created three of the four html documents necessary for the website.
* Examined Bootstrap CSS and added design elements

Lauren 
* 

Dylan 
* Set up a linux virtual machine to start building and developing a custom ROM 
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
* Similarly to Aaron, I had several problems while trying to build the repo. I spent a good amount of time after I had pulled on my windows machine realizing we had to build on linux
* I had to spend 3 hours pulling the repo on my Linux VM

Aaron 
* I didn’t find documentation regarding dependencies, so I spent hours debugging the build process
* The original tutorial I used was wrong and basically instructed me to build the entire source, which took 3.5 hours each time. I did this twice before finding a different tutorial that informed me of an idegen section of the makefile.
* Even after generating the file for the IDE, indexing took over an hour.

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|No Open Source NIC driver code | 9 | 3 | If we can't find an open source NIC general driver for Android we will have to reevaluate our project scope or focus on another platform |
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the NIC to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding the AOSP general NIC code | 4 | 6 | Our team has little knowledge on the AOSP and will  have to learn how it works |
| NIC Initialization  | 5 | 7 | On device initialization the NIC will not be connected to a network causing problems with the firmware update we are developing |



# Progress Report 15-Oct-2019
## Overview
Kevin 
* Created container that holds information about device and missing devices for users to see

Lauren 
* 

Dylan 
* Started the process for setting up the Pixel XL for development

Aaron 
* Found the ConnectivityManager class and the nested NetworkCallback class, which has an onAvailable function. 
* Made the file for our DeviceFinder class on github.
* Found the documentation with all of the dependencies
* Started looking into ways to run the proof-of-concept code in an emulator or in android studio

## Outcomes
Kevin
* Container was created using HTML and Bootstrap CSS libraries

Lauren 
*

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
*

Dylan  
* Many of the tutorials for flashing devices are from 2012 or 2013, so they aren’t always up to date

Aaron 
* I never seem to find the official documentation for processes and such until the week after I spend a significant amount of time working on it (examples: the build process and dependencies), this creates a scenario where I have to revisit previously completed work to make sure it was done correctly and fix it if it was not.

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|No Open Source NIC driver code | 9 | 3 | If we can't find an open source NIC general driver for Android we will have to reevaluate our project scope or focus on another platform |
|Issue with pushing updated firmware | 8 | 2 | If we can't flash the updated firmware on an emulator we will have to try it on another device |
|Issue communicating the information from the NIC to the WebApp | 6 | 3 | The firmware that we update will have to communicate the MAC address to the application |
|Issue understanding the AOSP general NIC code | 4 | 6 | Our team has little knowledge on the AOSP and will  have to learn how it works |
| NIC Initialization  | 5 | 7 | On device initialization the NIC will not be connected to a network causing problems with the firmware update we are developing |
