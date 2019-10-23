Before trying to compile, make sure that you have a system with at least 16gb of RAM, perferably more than 4 threads, and at least 400gb of storage. The official requirements are at https://source.android.com/setup/build/requirements.

NOTE: You will not be able to use the 

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

3. Compile the custom ROM from the root of the AOSP tree
```bash
source build/envsetup.sh
lunch aosp_marlin-userdebug
m update-api
m droid
m

aka:
source build/envsetup.sh && lunch aosp_marlin-userdebug && m update-api && m droid && m
```
  
from https://source.android.com/setup/build/building
from https://stackoverflow.com/questions/35579646/android-source-code-compile-error-try-increasing-heap-size-with-java-option
