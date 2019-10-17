https://www.androidauthority.com/build-custom-android-rom-720453/

https://source.android.com/setup/build/requirements

Recommended process to build all of the java code for the userdebug variant of the Pixel XL (for flashing only):
```bash
cd ProjectRootOfAospTree
source build/envsetup.sh
lunch aosp_marlin-userdebug
m droid -jThreadCountHere
```
m -j java is also recommended?

for testing with the emulator:
```bash
cd RootOfAospTree
source build/envsetup.sh
lunch aosp_arm-eng
m droid -jThreadCountHere
```
from https://source.android.com/setup/build/building
