package edu.cooper.ece366;

import static spark.Spark.*;
import static com.mongodb.client.model.Filters.eq;

import com.mongodb.MongoException;
import edu.cooper.ece366.Mongo.MongoHandler;
import edu.cooper.ece366.Mongo.User.User;
import edu.cooper.ece366.Mongo.User.UserHandler;
import org.bson.BsonDocument;
import org.bson.BsonInt64;
import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.InsertOneResult;
import org.bson.types.ObjectId;

import java.util.Arrays;

public class Main {

    public static void main(String[] args){ // MongoHandler, UserHandler and Social Login Sanity Checks
        get("/test", (req,res)->{ // Backend Hello World
            return "Woo, we love TonePoem";
        });
        MongoHandler handler = new MongoHandler("HelloWorld");
        MongoCollection<Document> collection = handler.getCollection("Earth");

        try{
            Bson command = new BsonDocument("ping", new BsonInt64(1));
            Document commandResult = handler.db.runCommand(command);
            System.out.println("Connected successfully to server.");
            InsertOneResult result = collection.insertOne(new Document()
                    .append("_id", new ObjectId())
                    .append("Country", "Taiwan")
                    .append("Foods", Arrays.asList("Bubble Tea", "Pineapple Cake"))
            );
            System.out.println("Got id: " + result.getInsertedId());
            Document doc = collection.find(eq("Country", "Taiwan")).first();
            System.out.println("Got: " + doc.toJson());
        } catch (Exception e){
            System.err.println("Uh oh, error");
        }
        try{
            UserHandler handled = new UserHandler(handler);
            User user = handled.verifyUser("eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzMzJhYjU0NWNjMTg5ZGYxMzNlZmRkYjNhNmM0MDJlYmY0ODlhYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTUyOTcyNTA1ODUzLWQwY3Q0am5hNGtwNXRvbHNtODh2aDU1dW82NHA3NnViLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTUyOTcyNTA1ODUzLWQwY3Q0am5hNGtwNXRvbHNtODh2aDU1dW82NHA3NnViLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwOTU5MzMzNzcxNzk4OTgzMTg0IiwiZW1haWwiOiJsLmgucmhvZGVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJOcnVSSFZyRWQxOFJlOVpXQi1ZUFd3IiwibmFtZSI6Ikx1Y2lhIFJob2RlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSndWLVdVRVZDU2VYZ2VHWmhLM2tjQ0NkbjBYWHdmTGlhSms3UlJoPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ikx1Y2lhIiwiZmFtaWx5X25hbWUiOiJSaG9kZSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjUwODMyODQxLCJleHAiOjE2NTA4MzY0NDEsImp0aSI6IjYyZmZmYTMxOTM5NzhiMDgyNjA4MGFjNzRkMTE1NTI0NTU5Nzk3ZWEifQ.D7MKU-OQT4rtSCmiLWZEE4rBpaAeKl2kjeELs6_zwHXD5hnRAtPWvpcbD7STHXLuMenWi9Ca9VrCdMVzXfElCznHNCK2zZ-rGnObLRWQYkQkKCAi8zRSdPbdMtmOMETvW7ClVBPxx0IzEQ15uAj-j82UIJ67CPKtCdXPA6v5OqeiGVgnpV3vXHSzwKNDJ6ccaNQBBIXt7u8g4w7X_32OXrtRwMS0qn_sXZmtq6IKXGrfsi_qzLXlZ3P_djzcRtvvlnIjCDOY1WW5oPURPFcC4yaZ-xYSkaz0maeUqNJUatSOKtufVIl8aeLBQ6zfFU_2Os5F2Dag4kjeylX00hatWA");
            System.out.println(user);

        } catch (Exception e){
            System.err.println("Uh oh, no login");
        }

        get("/hello", (req,res) -> {
            try{
                UserHandler handled = new UserHandler(handler);
                User user = handled.verifyUser(req.headers("Authorization"));
                return user;
            } catch (Exception e){
                System.err.println("Uh oh, no login");
            }
            return "";
        });
    }
}
