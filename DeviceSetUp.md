# Pixel XL physical device running custom ROM

Our initial plan was to build the custom ROM on the Android Studio emulator. Our team had an extra Pixel XL laying around that once we have got the ROM working on the emulator would like to try a physical test on a phone.

### Unlocking the bootloader
---
***Warming This Will factory reset the device!***

1. The device must be set to developer mode
2. Once the device is in developer mode enable the USB debugging feature
3. Download the ADB ZIP file
4. Extract the ADB file somewhere accessible
5. Open the file explorer and browse where you extracted the file
6. Open a command prompt in the same directory (done by holding Shift and Right-clicking within the folder then click the “open command prompt here” option)
7. Connect  the device via USB
8. In the command prompt type `adb devices`
9. On the phone there will be a prompt to allow for USB debugging, select yes
10. Repeat the command from step 8 - `adb devices`, this time you should see the connected phone listed
11. From here you can begin to unlock the bootloader by typing in the command prompt `adb reboot bootloader`
12. Once the phone is in the bootloader mode issue the command `fastboot flashing unlock`
13. On the Pixel there will be a confirmation on the screen and using the **volume up rocker** highlight yes and press the **power button** to select yes. This will begin the process of unlocking the bootloader.
14. Once the bootloader is unlocked the device will boot back into the bootloader. To boot into the system press the **power button** or issue the command `fastboot reboot` in the command prompt.
15. Then the bootloader is unlocked.
