# Android Studio Set up

1. Make sure that Oracle JDK 8 is installed as well
>  `sudo add-apt-repository ppa:webupd8team/java`
>
> `sudo apt-get update`
>
> `sudo apt-get install oracle-java8-installer`
>
> `sudo apt-get install oracle-java8-set-default`

2. First Download the zip for [Android Studio](https://developer.android.com/studio)
3. Unzip the package somewhere you can easily find it
4. open a terminal, navigate to the `android-studio/bin/` directory, and execute `studio.sh`
5. Set the `ANDROID_HOME` environment variable to the location of your Android SDK installation
>`sudo gedit ~/.bashrc`
>
>`export ANDROID_HOME=/home/user_directory/Android/Sdk`
>
>`export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools`
>
>`export JAVA_HOME=/usr/lib/jvm/java-8-oracle`


Note: If you are running a 64-bit version of Ubuntu, you need to install some 32-bit libraries with the following command
`sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386`
