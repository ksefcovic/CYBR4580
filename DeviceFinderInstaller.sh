#!/bin/bash
echo "-----updating and upgrading-----"
sudo apt update -y
sudo apt upgrade -y
echo "-----installing dependencies-----"
sudo apt-get install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev libncurses5 x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip python python3
echo "-----installing repo-----"
mkdir ./bin
PATH=./bin:$PATH
curl https://storage.googleapis.com/git-repo-downloads/repo > ./bin/repo  
chmod a+x ./bin/repo
echo "-----making directory for AOSP source-----"
mkdir AospSource  
cd AospSource
echo "-----initializing repo-----"
git config --global user.name "" 
git config --global user.email ""
repo init -u https://android.googlesource.com/platform/manifest -b android-10.0.0_r2
echo "-----pulling the source, this may take several hours-----"
repo sync
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
export JACK_SERVER_VM_ARGUMENTS="-Dfile.encoding=UTF-8 -XX:+TieredCompilation -Xmx8g"
echo "-----pulling device finder code-----"
wget https://raw.githubusercontent.com/ksefcovic/CYBR4580/master/ConnectivityService.java
wget https://raw.githubusercontent.com/ksefcovic/CYBR4580/master/DeviceFinder.java
echo "-----replacing system files with Device Finder files-----"
cp DeviceFinder.java /frameworks/base/services/core/java/com/android/server/
rm /frameworks/base/services/core/java/com/android/server/ConnectivityService.java
cp ConnectivityService.java /frameworks/base/services/core/java/com/android/server/
echo "-----building the source, this may take several hours-----"
source build/envsetup.sh
lunch sdk_phone_x86
make update-api
make
echo "-----Device Finder installation is complete!-----"
echo "please run emulator to start the android emulator with device finder"
