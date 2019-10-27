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

## Flashing the TWRP Recovery Environment
---
1. Download the TWRP image for your device [Pixel XL TWRP image link](https://twrp.me/google/googlepixelxl.html).
2. Copy the downloaded image into the folder where you extracted the ADB. Renaming the file as ***twrp.img*** will make the following steps easier.
2. Connect the device via USB and open a command prompt in the directory you extracted the ADB in.
3. Boot the device into bootloader mode by typing `adb reboot bootloader`.
4. Once the device is in the bootloader issue the command `fastboot flash recovery twrp.img` in the command prompt.
5. If everything worked correctly you should see a success message.
6. Unplug your phone and use the **volume down rocker** to scroll to the _“Recovery”_ option in your bootloader
7. Press the **power button** to select and your device should then boot into TWRP
8. If it asks for a password enter the devices PIN/Password
9. It may also ask if you want to open TWRP in "read-only" mode this means TWRP will only exist on the phone until next reboot (less convenient, but doesn't stay on your phone)
10. At this point, TWRP is on the device and can be used to flash a custom ROM

Note this is a good time to create a backup of the device. If you tap the "backup" button on the TWRP screen you can select "Boot", "System", and "Data" then swipe at the bottom of the screen to start the backup. You can give the backup a "Name" to make it more recognizable. The backup will take a while, so give it time. When it finishes, head back into the Backup menu. Uncheck all the options and scroll to the bottom. If you have a special partition listed after “Recovery”, such as WiMAX, PDS, or EFS, check it, and perform one more backup. This partition usually contains your EFS or IMEI information, which is crucial. If it ever becomes corrupted, you’ll lose data connectivity and can restore this backup to make your phone function again.
