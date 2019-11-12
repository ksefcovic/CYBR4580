//package declaration

//everything for testConnectivity
import java.io.BufferedReader;
import java.io.BufferedInputStream;
import java.io.InputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
//get IMEI/MEID
import android.telephony.*;

public static class DeviceFinder{

    public void run() {
        Log.v("DeviceFinder", "run() was called!");
        testConnectivity();
        //sendPostRequest(getGPS(), getImei());
    }
    
    //getGPS is a private function called by run() that returns the last known GPS location
    private Location getGPS() {

    }
    
    //getImei is a function called by run() that returns the IMEI
    private String getImei() {
        TelephonyManager telephonyManager = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);
        String deviceID = telephonyManager.getImei();
        //the previous two lines are based on Taner's answer at https://stackoverflow.com/a/3009341
        //get the IMEI
        if(deviceID == null) deviceID = telephonyManager.getMeid;
        //If the returned value is null, get MEID (apparently the CDMA equivalent??)
        if(deviceID == null) deviceID = "9999";
        //If that fails, set it to 9999 for the sake of testing
        return deviceID;
    }

    //this function uses the library to send GPS and IMEI to the server
    //it gets passed the GPS location and the imei
    private int sendPostRequest(Location currentLocation, String imei) {
        //latitude and longitude can be accessed using currentLocation.getLatitude() .getLongitude()
    }

    //all of the functionality in the following code is from https://developer.android.com/reference/java/net/HttpURLConnection
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
  
    //readSteam was written by aviomaksim
    //from https://stackoverflow.com/questions/8376072/whats-the-readstream-method-i-just-can-not-find-it-anywhere
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
