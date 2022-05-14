package edu.cooper.ece366.Mongo;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoClientSettings;

import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

public class MongoHandler {
    private final MongoClient client; //client server database frontend, connection to database
    public final MongoDatabase db; // database
    public MongoHandler(String name){
        client = MongoClients.create(System.getenv("MONGO_URI")); // make new client to uri
        CodecRegistry defaultCodecRegistry = MongoClientSettings.getDefaultCodecRegistry(); // codec registry
        CodecRegistry fromProvider = CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build());
        CodecRegistry pojoCodecRegistry = CodecRegistries.fromRegistries(defaultCodecRegistry, fromProvider);
        db = client.getDatabase(name).withCodecRegistry(pojoCodecRegistry); // database with name

    }
    public MongoHandler(){
        this("TonePoem");
    }

    public MongoCollection<Document> getCollection(String name) { // for getting a specific collection
        return db.getCollection(name);
    }

}
