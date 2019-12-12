//this file should be placed in <aosp source root>/frameworks/base/services/core/java/com/android/server/
package com.android.server;

//get location
import android.content.Context;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
//get imei/meid
import android.os.Bundle;
import android.os.HandlerThread;
import android.os.Looper;
import android.telephony.TelephonyManager;
//for Log.d
import android.util.JsonReader;
import android.util.Log;
//post request code
import android.annotation.TargetApi;
import org.json.JSONObject;
import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class DeviceFinder {
    private DeviceFinder df;
    private HandlerThread ht;
    private String imei;

    //setup the location listener
    private LocationListener ll = new LocationListener() {
        @Override
        public void onLocationChanged(Location curLocation) {
            //convert the double coordinates to a string
            String lat = Double.toString(curLocation.getLatitude());
            String lon = Double.toString(curLocation.getLongitude());
            Log.d("DeviceFinder", "AW - Lat:" + lat + " , Long:" + lon);
            //call sendPostRequest now that we have the new location
            df.sendPostRequest(lat, lon);
            //kill the handlerthread
            if(ht.quit() == true) { Log.d("DeviceFinder","AW - ht quit"); }
            else Log.d("DeviceFinder","AW - ht quit failed");
        }

        @Override
        public void onStatusChanged(String s, int i, Bundle bundle) {
            Log.d("DeviceFinder","onStatusChanged " + s + " " + bundle.toString());
        }

        @Override
        public void onProviderEnabled(String s) {
            Log.d("DeviceFinder", "ProviderDisabled");
        }

        @Override
        public void onProviderDisabled(String s) {
            Log.d("DeviceFinder", "ProviderDisabled");
        }
    };

    //run makes all of the calls necessary to ensure DeviceFinder's endpoint functionality
    public void run(TelephonyManager tm, Context mContext) {
        //save the instance for the location listener
        df = this;
        //get the device's unique ID (IMEI or MEID)
        imei = this.getImei(tm);
        //get the GPS location and call sendPostRequest, passing it string representations of the coordinates
        this.getGPS(mContext);
    }

    //getGPS is a private function called by run()
    //it starts a handler thread that receives location updates and calls sendPostRequest with the new GPS coordinates
    private void getGPS(Context mContext) {
        //get the system service
        LocationManager locationManager = (LocationManager) mContext.getSystemService(Context.LOCATION_SERVICE);
        //start a handlerthread for updates and request an update
        if(locationManager != null) {
            ht = new HandlerThread("ht");
            ht.start();
            Looper myLooper = ht.getLooper();
            locationManager.requestSingleUpdate(LocationManager.GPS_PROVIDER, ll, myLooper);
        }
        else Log.d("DeviceFinder","getGPS - locationManager = null");
    }

    //getImei is a function called by run() that returns the IMEI as a string
    private String getImei(TelephonyManager mTelephonyManager) {
        String deviceID = mTelephonyManager.getImei();
        //get the IMEI
        if (deviceID == null) {
            deviceID = mTelephonyManager.getMeid();
        }
        //If the returned value is null, get MEID (apparently the CDMA equivalent??)
        Log.d("DeviceFinder", "AW - IMEI: " + deviceID);
        return(deviceID);
    }

    //this function sends the GPS coordinates and IMEI to the server
    //it gets passed the gps coordinates and is called by handlerthread running onLocationChanged
    private boolean sendPostRequest(String lat, String lon) {
        try {
            //setup everything for POST request
            String url = "https://www.device-finder.com/api/v1/check_status";
            HttpsURLConnection httpClient = (HttpsURLConnection) new URL(url).openConnection();
            httpClient.setRequestMethod("POST");
            httpClient.setRequestProperty("Content-Type", "application/json; charset=utf-8");
            Log.d("sendPostRequest", "\nAW - Sending 'POST' request to URL : " + url);

            //put the parameters in a hashmap
            HashMap<String, String> hm = new HashMap();
            hm.put("imei", imei);
            // this is here for testing hm.put("imei", "mytestimei640851");
            hm.put("latitude", lat);
            hm.put("longitude", lon);

            //make it a string to send
            JSONObject obj = new JSONObject(hm);
            String data = obj.toString();

            //send the POST Request
            httpClient.setDoOutput(true);
            DataOutputStream wr = new DataOutputStream(httpClient.getOutputStream());
            wr.writeBytes(data);
            wr.flush();
            Log.d("sendPostRequest", "AW - Post parameters : " + data);

            //get the response code
            int responseCode = httpClient.getResponseCode();
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
            //return false to let the driver know it did not work
            return(false);
        }

        //return true to let the driver know it worked
        return(true);
    }
}
