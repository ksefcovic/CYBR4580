https://www.androidauthority.com/build-custom-android-rom-720453/

https://source.android.com/setup/build/requirements

Recommended process to build all of the java code for the userdebug variant of the Pixel XL:
```bash
cd /home/aaron/CapstoneProject
source build/envsetup.sh
lunch aosp_marlin-userdebug
m droid -jThreadCountHere
```
m -j java is also recommended?
from https://source.android.com/setup/build/building
