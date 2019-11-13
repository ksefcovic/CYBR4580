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

public class DeviceFinder {

    public void run(TelephonyManager mTelephonyManager) {
        this.getImei(mTelephonyManager);
        //sendPostRequest(getGPS(), getImei());
    }

    //getGPS is a private function called by run() that returns the last known GPS location
    //latitude and longitude can be accessed using .getLatitude() .getLongitude() on the object returned
    private Location getGPS() {
        //TODO : change the return value
        return(null);
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

            HttpsURLConnection httpClient = (HttpsURLConnection) new URL(url).openConnection();

            httpClient.setRequestMethod("POST");

            String urlParameters = "imei=9312093821321";

            httpClient.setDoOutput(true);
            DataOutputStream wr = new DataOutputStream(httpClient.getOutputStream());
            wr.writeBytes(urlParameters);
            wr.flush();

            int responseCode = httpClient.getResponseCode();
            Log.d("sendPostRequest", "\nSending 'POST' request to URL : " + url);
            Log.d("sendPostRequest", "Post parameters : " + urlParameters);
            Log.d("sendPostRequest", "Response Code : " + responseCode);

            BufferedReader in = new BufferedReader(new InputStreamReader(httpClient.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();

            while ((line = in.readLine()) != null) {
                response.append(line);
            }

            //print result
            Log.d("sendPostRequest", "" + response.toString());
        } catch (Exception e) {
            Log.d("sendPostrequest", "Exception: " + e.toString() + " -- " + e.getMessage());
        }
        //TODO: change the return value
        return (0);
    }
}
