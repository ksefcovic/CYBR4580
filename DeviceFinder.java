//this file should be placed in <aosp source root>/frameworks/base/services/core/java/com/android/server/
package com.android.server;

//get location
import android.location.Location;
import android.location.LocationManager;
//get imei/meid
import android.telephony.TelephonyManager;
//for Log.d
import android.util.Log;
//post request code
import android.annotation.TargetApi;

import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

public class DeviceFinder {

    public void run(TelephonyManager mTelephonyManager) {
        this.sendPostRequest(getGPS(), getImei(mTelephonyManager));
    }

    //getGPS is a private function called by run() that returns the last known GPS location
    //latitude and longitude can be accessed using .getLatitude() .getLongitude() on the object returned
    private Location getGPS() {
        try{
            boolean isGPSEnabled = false;
            boolean isNetworkEnabled = false;
            boolean canGetLocation = false;
            final Context mContext;
            Location location;
            LocationManager locationManager;

            locationManager = (LocationManager) mContext.getSystemService(LOCATION_SERVICE);

            isGPSEnabled = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER);
            isNetworkEnabled = locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER);

            if(!isGPSEnabled && !isNetworkEnabled) {
                // no network is enabled
            } else {
                canGetLocation = true;
                if(isNetworkEnabled) {
                    locationManager.requestSingleUpdates(
                            LocationManager.NETWORK_PROVIDER,
                            this);
                    Log.d("Network", "Network");
                    if(locationManager != null) {
                        location = locationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER);
                    }
                }
                if(isGPSEnabled) {
                    if(location == null) {
                        locationManager.requestSingleLocationUpdates(
                                LocationManager.GPS_PROVIDER,
                                this);
                        Log.d("GPS Enabled", "GPS Enabled");
                        if (locationManager != null) {
                            location = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
                        }
                    }
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return(location);
    }

    //getImei is a function called by run() that returns the IMEI as a string
    private String getImei(TelephonyManager mTelephonyManager) {
        String deviceID = mTelephonyManager.getImei();
        //get the IMEI
        if (deviceID == null) {
            deviceID = mTelephonyManager.getMeid();
        }
        //If the returned value is null, get MEID (apparently the CDMA equivalent??)
        if (deviceID == null) {
            deviceID = "9999";
        }
        //If that fails, set it to 9999 for the sake of testing
        Log.d("ConnectivityService", "AW - " + deviceID);
        return (deviceID);
    }

    //this function uses the library to send GPS and IMEI to the server
    //it gets passed the GPS location and the imei
    private int sendPostRequest(Location currentLocation, String imei) {
        //latitude and longitude can be accessed using currentLocation.getLatitude() .getLongitude()
        try {
            String url = "http://ec2-3-17-64-157.us-east-2.compute.amazonaws.com/api/v1/check_status";

            HttpURLConnection httpClient = (HttpURLConnection) new URL(url).openConnection();
            httpClient.setRequestMethod("POST");

            HashMap<String, String> hm = new HashMap();
            //hm.put("imei", imei);
            hm.put("IMEI", "mytestimei640851");
            hm.put("latitude", "1");
            hm.put("longitude", "11");
            String data = hm.toString();
            httpClient.setDoOutput(true);
            DataOutputStream wr = new DataOutputStream(httpClient.getOutputStream());
            wr.writeBytes(data);
            wr.flush();

            int responseCode = httpClient.getResponseCode();
            Log.d("sendPostRequest", "\nAW - Sending 'POST' request to URL : " + url);
            Log.d("sendPostRequest", "AW - Post parameters : " + data);
            Log.d("sendPostRequest", "AW - Response Code : " + responseCode);

            BufferedReader in = new BufferedReader(new InputStreamReader(httpClient.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();

            while ((line = in.readLine()) != null) {
                response.append(line);
            }

            //log result
            Log.d("sendPostRequest", "AW - " + response.toString());
        } catch (Exception e) {
            Log.d("sendPostrequest", "AW - Exception: " + e.toString() + " -- " + e.getMessage());
        }
        //TODO: change the return value
        return (0);
    }
}
