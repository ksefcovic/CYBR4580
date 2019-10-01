These steps originate from [here](https://source.android.com/setup/build/downloading#getting-the-files), but have been modified for our specific use.
1. Create a bin/ directory in your home directory by running
```mkdir ~/bin  
PATH=~/bin:$PATH```

2. Download Repo and make it executable
  `curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo  
  chmod a+x ~/bin/repo`

3. Make a directory for the source code
  `mkdir DirectoryNameHere  
  cd DirectoryNameHere `

4. Add your name and email to your git configuration
  `git config --global user.name "Your Name" 
  git config --global user.email "you@example.com"`

5. intialize repo with the Android 10 R3 Branch
  `repo init -u https://android.googlesource.com/platform/manifest -b android-10.0.0_r3`

6. Download the AOSP Souce Tree (make sure to change the number of threads)
NOTE: This will take a while (6.5 or so hours in my case)
  `repo sync -j NumberOfThreadsHere `

7. Download the proprietary binaries for the Pixel XL into the directory created in Step 3
[Google Binaries](https://dl.google.com/dl/android/aosp/google_devices-marlin-qp1a.190711.020-62a87646.tgz)
[Qualcomm Binaries](https://dl.google.com/dl/android/aosp/qcom-marlin-qp1a.190711.020-2b9bc5b4.tgz)

8. Decompress the files
  `gunzip google_devices-marlin-qp1a.190711.020-62a87646.tgz  
  gunzip qcom-marlin-qp1a.190711.020-2b9bc5b4.tgz  
  tar -xf google_devices-marlin-qp1a.190711.020-62a87646.tar  
  tar -xf qcom-marlin-qp1a.190711.020-2b9bc5b4.tar  
  rm google_devices-marlin-qp1a.190711.020-62a87646.tar  
  rm qcom-marlin-qp1a.190711.020-2b9bc5b4.tar`

9. Run the extraction shell script

  `./extract-qcom-marlin.sh  
  ./extract-google_devices-marlin.sh`

10. Hit enter to move down through the license agreement and after point 8.e type "I ACCEPT"

11. delete the binaries

  `rm extract-qcom-marlin.sh  
  rm extract-google_devices-marlin.sh`

12. Open Android Studio

13. Click "Open Project"

14. Select the directory created in Step 3