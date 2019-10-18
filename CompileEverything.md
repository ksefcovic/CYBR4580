https://www.androidauthority.com/build-custom-android-rom-720453/

https://source.android.com/setup/build/requirements

Recommended process to build all of the java code for the userdebug variant of the Pixel XL (for flashing only):
```bash
cd RootOfAospTree
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

if you run out of memory (if you get an OutOfMemory Exception) run:
```bash
export JACK_SERVER_VM_ARGUMENTS="-Dfile.encoding=UTF-8 -XX:+TieredCompilation -Xmx4g"
```
from https://stackoverflow.com/questions/35579646/android-source-code-compile-error-try-increasing-heap-size-with-java-option
