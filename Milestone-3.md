# Progress Report (Tuesday, December 17th)
## Overview
We have been quite busy since Milestone 2. We have created a demo of our environment from the beginning to the end of the user lifecycle. Additionally, we have taken steps to secure our environment so that we can keep any would-be users' information safe.



## Outcomes

For an in-depth look at what took place each week, follow [this link](https://github.com/ksefcovic/CYBR4580/blob/master/ProgressReports.md) to our weekly progress reports

* Successfully engineered the AOSP to allow for the sending of information from a test device to the web environment.
  * Created the call to our code in ConnectivityService's makeDefault function
  * Created the DeviceManager endpoint code in [DeviceManager.java](https://github.com/ksefcovic/CYBR4580/blob/master/DeviceFinder.java)
* Created a phone application that allows users to authenticate using a randomly generated string of numbers.
* Sent location information from test device to the web environment.
* Created [user installation documentation](https://github.com/ksefcovic/CYBR4580/blob/master/AndroidDocumentation/User-GetRunning.md) and a [script](https://github.com/ksefcovic/CYBR4580/blob/master/DeviceFinderInstaller.sh) that runs through all of the tedious steps.
* Performed a security evaluation to find vulnerabilities and leaked user information.
* Worked to remediate those issues by securing the web environment using an SSL certificate and applying security patches.
* Attempted to make the user interface as pleasing as possible.
* Used the Google Maps API to show a Satellite view of the device's location based off of the last update.


## Hinderances
* Worked with devices and frameworks that we haven’t before.
* We ran into hardware restrictions compiling the AOSP where we needed a very powerful machine.
* Spent time troubleshooting sending and receiving location information.
* Spent time troubleshooting issues regarding the getting of GPS coordinates.
* Spent time troubleshooting a self-created race condition.
* Problem with updating threads on the Device Registration application

## [Our Presentation](https://docs.google.com/presentation/d/1DFJBnu5zd9t3y2zkTosTLuBbeiVEJE5aVKu-hoNv9Hw/edit?usp=sharing)
