1. Install the Pixel XL AVD in Android Studio using the Android Studio instructions
2. Build the custom ROM using [these instructions](https://github.com/ksefcovic/CYBR4580/blob/master/CompileEverything.md)
3. Make sure that your environment variables are set:
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
4. In the root of the AOSP source, run the following:
```bash
emulator @Pixel_XL_API_29 -system out/target/product/marlin/system.img -ramdisk out/target/product/marlin/ramdisk.img -logcat *:v
```
