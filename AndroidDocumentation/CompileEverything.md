Before trying to compile, make sure that you have a system with at least 16gb of RAM, preferably more than 4 threads, and at least 400gb of storage. The official requirements are at https://source.android.com/setup/build/requirements.

NOTE: You will not be able to run the custom ROM using the emulator in a VM, so there is almost no use in compiling the source in a VM. Additionally, the build system does not support the Windows Subsystem for Linux (WSL), so do not try to build using it.

1. Make sure that your environment variables are set
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

2. Increase the max heap size to 8gb
```bash
export JACK_SERVER_VM_ARGUMENTS="-Dfile.encoding=UTF-8 -XX:+TieredCompilation -Xmx8g"
```

NOTE: Compiling for the first time will take 2 to 3 hours, but compiling after the first time will only take a couple of minutes unless you run m clean or make clean.

3. Compile the custom ROM from the root of the AOSP tree
* If you want to use the android emulator run the following:
```bash
source build/envsetup.sh
lunch sdk_phone_x86
make update-api
make
```
* If you want to flash to a Pixel XL run the following:
```bash
source build/envsetup.sh
lunch aosp_marlin-userdebug
make update-api
make
```

**** If you have already compiled the source and want to recompile your changes, simply run ```make```****

from https://source.android.com/setup/build/building and https://stackoverflow.com/questions/35579646/android-source-code-compile-error-try-increasing-heap-size-with-java-option

Next: [flash the device](https://github.com/ksefcovic/CYBR4580/blob/master/AndroidDocumentation/DeviceSetUp.md) or [test in Android emulator](https://github.com/ksefcovic/CYBR4580/blob/master/AndroidDocumentation/RunAndroidEmulator.md)
