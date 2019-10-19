These steps originate from [here](https://source.android.com/setup/build/downloading#getting-the-files), but have been modified for our specific use.

1. Create a bin/ directory in your home directory by running
```bash
mkdir ~/bin  
PATH=~/bin:$PATH 
```

2. Download Repo and make it executable
```bash
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo  
chmod a+x ~/bin/repo
 ```

3. Make a directory for the source code
```bash
mkdir DirectoryNameHere  
cd DirectoryNameHere
```

4. If doing this on Windows via the Windows Subsystem for Linux (WSL) make your directory case-sensitive (run in commandprompt)
```cmd
fsutil.exe file SetCaseSensitiveInfo C:\folder\path enable
```

5. Add your name and email to your git configuration
```bash
git config --global user.name "Your Name" 
git config --global user.email "you@example.com"`
```

6. intialize repo with the Android 10 R3 Branch
```bash
repo init -u https://android.googlesource.com/platform/manifest -b android-10.0.0_r3
```

7. Download the AOSP Souce Tree (make sure to change the number of threads)
NOTE: This will take a while (6.5 or so hours in my case)
```bash
repo sync -j NumberOfThreadsHere
```

8. Download the proprietary binaries for the Pixel XL into the directory created in Step 3

[Google Binaries](https://dl.google.com/dl/android/aosp/google_devices-marlin-qp1a.190711.020-62a87646.tgz)

[Qualcomm Binaries](https://dl.google.com/dl/android/aosp/qcom-marlin-qp1a.190711.020-2b9bc5b4.tgz)

9. Decompress the files
```bash
gunzip google_devices-marlin-qp1a.190711.020-62a87646.tgz  
gunzip qcom-marlin-qp1a.190711.020-2b9bc5b4.tgz  
tar -xf google_devices-marlin-qp1a.190711.020-62a87646.tar  
tar -xf qcom-marlin-qp1a.190711.020-2b9bc5b4.tar  
rm google_devices-marlin-qp1a.190711.020-62a87646.tar  
rm qcom-marlin-qp1a.190711.020-2b9bc5b4.tar
```

10. Run the extraction shell script
```bash
./extract-qcom-marlin.sh  
./extract-google_devices-marlin.sh
```

11. Hit enter to move down through the license agreement and after point 8.e type "I ACCEPT"

12. delete the shell scripts
```bash
rm extract-qcom-marlin.sh  
rm extract-google_devices-marlin.sh
make clobber
```

13. Install dependencies
```bash
sudo apt-get install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip
```

14. Run the following commands
```bash
make idegen && development/tools/idegen/idegen.sh
```
15. Open android studio

16. Click on configure --> Edit Custom VM Options, then enter the following and click save.
```
-Xms748m
-Xmx748m
```

17. Click configure --> Edit Custom Properties and click save
```
idea.max.intellisense.filesize=5000
```

18. increase the watch limit by adding ```fs.inotify.max_user_watches = 524288``` to /etc/sysctl.conf and running the following command:
```bash
sudo sysctl -p --system
```

19. click open project

20. select the file named "android.ipr"

21. Click on File -> Settings Expand System settings, and click on Memory settings. Set the IDE Max Heap size to at least 2048 MB.
