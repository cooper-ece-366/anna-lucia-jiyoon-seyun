package edu.cooper.ece366.Mongo.User;
// from Greg :)
import com.google.gson.Gson;
import org.bson.codecs.pojo.annotations.BsonCreator;
import org.bson.codecs.pojo.annotations.BsonProperty;

// user POJO that is seralizedable to JSON
public class User {
    @BsonProperty("_id") public final String userId;
    @BsonProperty("firstName") public final String firstName;
    @BsonProperty("lastName") public final String lastName;
    @BsonProperty("email") public final String email;

    @BsonCreator
    public User(
            @BsonProperty("_id") String userId,
            @BsonProperty("firstName") String firstName,
            @BsonProperty("lastName") String lastName,
            @BsonProperty("email") String email
    ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String toJSONString() {
        return new Gson().toJson(this);
    }

    @BsonProperty("_id")
    public String getId() {
        return userId;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getEmail() {
        return email;
    }
    public String toString() {
        return toJSONString();
    }
}
