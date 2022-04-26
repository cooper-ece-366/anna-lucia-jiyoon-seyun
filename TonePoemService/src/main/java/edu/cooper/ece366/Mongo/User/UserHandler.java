package edu.cooper.ece366.Mongo.User;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.UpdateOptions;
import edu.cooper.ece366.Mongo.MongoHandler;
import org.bson.Document;
import org.bson.conversions.Bson;


import java.util.ArrayList;
import java.util.Arrays;

public class UserHandler {
    private MongoCollection<Document> collection;
    public UserHandler(MongoHandler handler){ // constructor
        collection = handler.getCollection("Users");
    }

    public User verifyUser(String idTokenString) throws Exception { // verify user and get info
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), new GsonFactory())
                .setAudience(Arrays.asList("952972505853-d0ct4jna4kp5tolsm88vh55uo64p76ub.apps.googleusercontent.com"))
                .build();
        GoogleIdToken idToken;
        try{
            idToken = verifier.verify(idTokenString);
        } catch (Exception e) {
            throw new Exception();
        }

        GoogleIdToken.Payload payload = idToken.getPayload();
        String userId = payload.getSubject();
        String email = payload.getEmail();
        String firstname = (String) payload.get("given_name");
        String lastName = (String) payload.get("family_name");
        return insert(userId, firstname, lastName, email);
    }

    public User insert(String userId, String firstName, String lastName, String email) {
        Bson update = new Document("$setOnInsert",
                new Document()
                        .append("_id", userId)
                        .append("firstName", firstName)
                        .append("lastName", lastName)
                        .append("email",email));
        collection.updateOne(Filters.eq("_id",userId),update,new UpdateOptions().upsert(true));
        return getUser(userId);
    }
    public User getUser(String userId){
        ArrayList<User> users = collection.find(Filters.eq("_id",userId), User.class).into(new ArrayList<>());
        return users.get(0);
    }
}

