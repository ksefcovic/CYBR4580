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

public class DeviceFinder {

    private Location curLocation = null;
    private String lat = null;
    private String lon = null;
    private DeviceFinder df;
    private HandlerThread ht;
    Semaphore latSem = new Semaphore(1, true);
    Semaphore lonSem = new Semaphore(1, true);

    //setup the location listener
    private LocationListener ll = new LocationListener() {
        @Override
        public void onLocationChanged(Location location) {
            //grab the semaphore
            latSem.acquire();
            lonSem.acquire();
            //set the locaiton, lat, and lon
            curLocation = location;
            double latitude = curLocation.getLatitude();
            double longitude = curLocation.getLongitude();
            //make lat and lon a string -- sendPostRequest will access this
            lat = Double.toString(latitude);
            lon = Double.toString(longitude);
            Log.d("DeviceFinder","AW - Lat:"+ lat + " , Long:"+ lon);
            latSem.release();
            lonSem.release();
            //kill the handlerthread so we don't continually get updates
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
        //save the instance for the locaiton listener
        df = this;
        this.getGPS(mContext);
        this.sendPostRequest(getImei(tm));
    }

    //getGPS is a private function called by run() that returns the last known GPS location
    private void getGPS(Context mContext) {
        //get the system service
        LocationManager locationManager = (LocationManager) mContext.getSystemService(Context.LOCATION_SERVICE);
        //if we got it, start a handlerthread for updates and request an update
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
        return (deviceID);
    }

    //this function uses the library to send GPS and IMEI to the server
    //it gets passed the imei
    private boolean sendPostRequest(String imei) {
        //latitude and longitude can be accessed using currentLocation.getLatitude() .getLongitude()
        try {
            //setup everything for POST request
            String url = "http://ec2-3-17-64-157.us-east-2.compute.amazonaws.com/api/v1/check_status";
            HttpURLConnection httpClient = (HttpURLConnection) new URL(url).openConnection();
            httpClient.setRequestMethod("POST");
            httpClient.setRequestProperty("Content-Type", "application/json; charset=utf-8");
            Log.d("sendPostRequest", "\nAW - Sending 'POST' request to URL : " + url);

            //put the parameters in a hashmap
            HashMap<String, String> hm = new HashMap();

            //hm.put("imei", imei);
            hm.put("imei", "mytestimei640851");
            latSem.acquire();
            hm.put("latitude", lat);
            latSem.release();
            lonSem.acquire();
            hm.put("longitude", lon);
            lonSem.release();

            //make it a string to send
            JSONObject obj = new JSONObject(hm);
            String data = obj.toString();

            //String data = hm.toString();
            httpClient.setDoOutput(true);

            //send the POST Request
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
