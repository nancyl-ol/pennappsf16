package best.application;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.util.HashMap;
import java.util.List;

import java.net.URL;
import android.util.Pair;
import android.net.Uri;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by jcoc611 on 2016-09-10.
 */
public class APIClient {
    private static String API_ENDPOINT = "";
    public APIClient(){

    }

    public JSONObject get(String resource, List<Pair<String, ?>> data){
        try {
            URL url = buildURL(resource, data);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());
                //readStream(in);
                return new JSONObject(in.toString());
            }catch(JSONException e){
                return null;
            } finally {
                urlConnection.disconnect();
            }
        }catch(IOException e){
            return null;
        }
    }

    private URL buildURL(String path, List<Pair<String, ?>> data) throws java.net.MalformedURLException{
        Uri.Builder partialUriBuilder = Uri.parse(API_ENDPOINT)
                .buildUpon();

        partialUriBuilder.appendPath(path);

        for(Pair<String, ?> pair: data){
            partialUriBuilder.appendQueryParameter(pair.first, String.valueOf(pair.second));
        }

        return new URL(partialUriBuilder.build().toString());
    }
}
