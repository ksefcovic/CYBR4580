1. Install the Pixel XL AVD in Android Studio using the Android Studio instructions
2. Build the custom ROM using [these instructions](https://github.com/ksefcovic/CYBR4580/blob/master/CompileEverything.md)
3. Delete ALL of the AVDs in Android Studio
4. In the root of the AOSP source, run the following:
```bash
emulator -logcat *:v -verbose
```
  * The logcat and verbose flags can be removed if you don't want to see the logs.
