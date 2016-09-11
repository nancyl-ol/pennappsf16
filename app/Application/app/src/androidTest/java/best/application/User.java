package best.application;

import android.util.Pair;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jcoc611 on 2016-09-10.
 */
public class User {
    String id;
    String username;
    String name;
    Integer age;
    String gender;
    String occupation;
    String number;

    public User(
            String id,
            String username,
            String name,
            Integer age,
            String gender,
            String occupation,
            String number
    ){
        this.id = id;
        this.username = username;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.number = number;
    }

    public static User fromAuth(String username, String password){
        APIClient api = new RideshareAPIClient();

        List<Pair<String, ?>> authData = new ArrayList<Pair<String, ?>>();
        authData.add(new Pair<String, String>("a", "b"));

        JSONObject response = api.get("api/login", authData);

        if(response.has("error")){
            throw new Exception("Damn daniel");
        }

        JSONObject userData;
        User newUser;

        try {

            userData = response.getJSONObject("user");
            newUser = new User(
                    userData.getString("_id"),
                    userData.getString("name"),
                    userData.getString("username"),
                    userData.getInt("age"),
                    userData.getString("gender"),
                    userData.getString("occupation"),
                    userData.getString("number")
            );
        }catch(JSONException e){
            return null;
        }
        return newUser;
    }
}
