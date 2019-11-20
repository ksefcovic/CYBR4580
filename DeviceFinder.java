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

    private Location curLocation = null;
    private String lat = null;
    private String lon = null;
    private DeviceFinder df;
    private HandlerThread ht;
    private TelephonyManager mTelephonyManager;

    private LocationListener ll = new LocationListener() {
        @Override
        public void onLocationChanged(Location location) {
            curLocation = location;
            double latitude = curLocation.getLatitude();
            double longitude = curLocation.getLongitude();
            lat = Double.toString(latitude);
            lon = Double.toString(longitude);
            Log.d("DeviceFinder","AW - Lat:"+ lat + " , Long:"+ lon);
            //df.sendPostRequest(getImei());
            //call this again because the previous request likely sent null or old
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

    public void run(TelephonyManager tm, Context mContext) {
        df = this;
        mTelephonyManager = tm;
        this.getGPS(mContext);
        this.sendPostRequest(getImei());
    }

    //getGPS is a private function called by run() that returns the last known GPS location
    private void getGPS(Context mContext) {
        LocationManager locationManager = (LocationManager) mContext.getSystemService(Context.LOCATION_SERVICE);
        if(locationManager != null) {
            //locationManager.requestLocationUpdate(LocationManager.GPS_PROVIDER, 0, 0, this);
            ht = new HandlerThread("ht");
            ht.start();
            Looper myLooper = ht.getLooper();
            locationManager.requestSingleUpdate(LocationManager.GPS_PROVIDER, ll, myLooper);
        }
        else Log.d("DeviceFinder","getGPS - locationManager = null");
    }

    //getImei is a function called by run() that returns the IMEI as a string
    private String getImei() {
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
        Log.d("DeviceFinder", "AW - IMEI: " + deviceID);
        return (deviceID);
    }

    //this function uses the library to send GPS and IMEI to the server
    //it gets passed the imei
    private int sendPostRequest(String imei) {
        //latitude and longitude can be accessed using currentLocation.getLatitude() .getLongitude()
        try {
            String url = "http://ec2-3-17-64-157.us-east-2.compute.amazonaws.com/api/v1/check_status";
            HttpURLConnection httpClient = (HttpURLConnection) new URL(url).openConnection();
            httpClient.setRequestMethod("POST");
            HashMap<String, String> hm = new HashMap();
            //hm.put("imei", imei);
            hm.put("IMEI", "mytestimei640851");
            hm.put("latitude", lat);
            hm.put("longitude", lon);
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
