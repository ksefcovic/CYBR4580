https://www.androidauthority.com/build-custom-android-rom-720453/

https://source.android.com/setup/build/requirements

https://source.android.com/setup/build/building

Recommended process to build all of the java code for the userdebug variant of the aosp_arm device:
```bash
cd /home/aaron/CapstoneProject
source build/envsetup.sh
lunch aosp_arm-userdebug
m -j java
```
