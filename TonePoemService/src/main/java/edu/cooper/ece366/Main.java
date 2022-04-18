package edu.cooper.ece366;

import static spark.Spark.*;
import static com.mongodb.client.model.Filters.eq;

import com.mongodb.MongoException;
import edu.cooper.ece366.Mongo.MongoHandler;
import org.bson.BsonDocument;
import org.bson.BsonInt64;
import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.InsertOneResult;
import org.bson.types.ObjectId;

import java.util.Arrays;

public class Main {

    public static void main(String[] args){
        get("/test", (req,res)->{
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
    }
}
