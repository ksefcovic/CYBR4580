# Android Studio Set up

1. First make sure that Oracle JDK 8 is installed
    >  `sudo add-apt-repository ppa:webupd8team/java`
    >
    > `sudo apt-get update`
    >
    > `sudo apt-get install oracle-java8-installer`
    >
    > `sudo apt-get install oracle-java8-set-default`

2. Then Download the zip for [Android Studio](https://developer.android.com/studio)
3. Unzip the package somewhere you can easily find it
4. open a terminal, navigate to the `android-studio/bin/` directory, and execute `studio.sh`
5. The Set up wizard will appear after executing the command
6. In the wizard there will be a screen where you select the components you want to install, **make sure to select Android Virtual Device** this is the emulator device that the custom ROM will be flashed to. You will need roughly 3GB of storage.
7. Once you have finished installing Android Studio through the command prompt it can be ran by executing `studio.sh`
8. Set the `ANDROID_HOME` environment variable to the location of your Android SDK installation
    >`sudo gedit ~/.bashrc`
    >
    >`export ANDROID_HOME=/home/user_directory/Android/Sdk`
    >
    >`export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools`
    >
    >`export JAVA_HOME=/usr/lib/jvm/java-8-oracle`
9. Once you have opend Android Studio select the tools dropdown tab on the top in the drop down select AVD Manager
10. This is where you will create a new virtual device to run as your emulator, select the Create Virtual Device button.
11. Once you select the button decide what device you want to emulate (in our case we selected Pixel XL so we can run on the emulator and a physical device)
> Note make sure the device you choose because you will need to build the ROM for the specific device you choose.
12. The next step is to select the system image for the device we are using android Q (however this will be over written when you flash the custom ROM)
13. Name the device and select finish and the emulator should be set up



Note: If you are running a 64-bit version of Ubuntu, you need to install some 32-bit libraries with the following command
    `sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386`
