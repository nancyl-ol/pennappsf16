package best.application;

import android.util.Pair;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jcoc611 on 2016-09-10.
 */
public class User {
    String username;
    String name;
    Integer age;
    String gender;
    String occupation;
    String number;

    public User(String usr){
        this.username = usr;
    }

    public static User fromAuth(String username, String password){
        APIClient api = new RideshareAPIClient();

        List<Pair<String, ?>> authData = new ArrayList<Pair<String, ?>>();
        authData.add(new Pair<String, String>("a", "b"));

        JSONObject userData = api.get("api/login", authData);
        if(userData.has("error")){
            throw new Exception("Damn daniel");
        }

        return new User(username);
    }
}
