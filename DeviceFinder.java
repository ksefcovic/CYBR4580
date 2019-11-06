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

public static class DeviceFinder{

    public void run() {
        testConnectivity();
        //sendPostRequest(getGPS(), getImei());
    }

    //TODO: this function will return the GPS coordinates -- it will NOT be void
    //getGPS is a private function called by run() that returns the last known GPS coordinates
    private void getGPS() {

    }

    //TODO: this function will return the IMEI, not void
    //getImei is a function called by run() that returns the IMEI
    private void getImei() {

    }

    //this function uses the library to send GPS and IMEI to the server
    //it gets passed the GPS coordinates and the imei
    //TODO: replace the int types for the parameters with their real values
    private int sendPostRequest(int location, int imei) {

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
