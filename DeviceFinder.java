package com.android.server;

//everything for testConnectivity
import java.io.BufferedReader;
import java.io.BufferedInputStream;
import java.io.InputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import android.telephony.TelephonyManager;
import android.util.Log;
import 

public class DeviceFinder{

    public void doTheThing(TelephonyManager mTelephonyManager) {
        this.testConnectivity();
        this.getImei(mTelephonyManager);
        //sendPostRequest(getGPS(), getImei());
    }

    //getGPS is a private function called by run() that returns the last known GPS location
    private Location getGPS() {
        //aa
    }

    //getImei is a function called by run() that returns the IMEI
    private String getImei(TelephonyManager mTelephonyManager) {
        String deviceID = mTelephonyManager.getImei();
        //get the IMEI
        if(deviceID == null) { deviceID = mTelephonyManager.getMeid(); }
        //If the returned value is null, get MEID (apparently the CDMA equivalent??)
        if(deviceID == null) { deviceID = "9999"; }
        //If that fails, set it to 9999 for the sake of testing
        Log.d("ConnectivityService", "AW - " + deviceID);
        return(deviceID);
    }

    //this function uses the library to send GPS and IMEI to the server
    //it gets passed the GPS location and the imei
    private int sendPostRequest(Location currentLocation, String imei) {
        //latitude and longitude can be accessed using currentLocation.getLatitude() .getLongitude()
        String url = "http://ec2-3-17-64-157.us-east-2.compute.amazonaws.com/api/v1/check_status";
        HttpsURLConnection httpClient = (HttpsURLConnection) new URL(url).openConnection();
        httpClient.setRequestMethod("POST");
        String urlParameters = "imei=9312093821321";
        httpClient.setDoOutput(true);
        try (DataOutputStream wr = new DataOutputStream(httpClient.getOutputStream())) {
            wr.writeBytes(urlParameters);
            wr.flush();
        }
        int responseCode = httpClient.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("Post parameters : " + urlParameters);
        System.out.println("Response Code : " + responseCode);
        try(BufferedReader in = new BufferedReader(new InputStreamReader(httpClient.getInputStream()))) {​
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = in.readLine()) != null) {
                response.append(line);
            }
            //print result
            System.out.println(response.toString());
        }
    }
    
    private void testConnectivity() {
        try {
            URL url = new URL("http://www.android.com/");
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());
                Log.d("ConnectivityService - AW", readStream(in));
            } finally {
                urlConnection.disconnect();
            }
        } catch(Exception e) {
            Log.d("ConnectivityService - AW","url connection failed");
        }
    }

    private String readStream(InputStream is) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader r = new BufferedReader(new InputStreamReader(is), 1000);
        for (String line = r.readLine(); line != null; line = r.readLine()) {
            sb.append(line);
        }
        is.close();
        return sb.toString();
    }
}
