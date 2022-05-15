package edu.cooper.ece366.Mongo.User;

import edu.cooper.ece366.Mongo.MongoHandler;
import edu.cooper.ece366.Mongo.User.User;
import edu.cooper.ece366.Mongo.User.UserHandler;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserHandlerTest {
    private static MongoHandler mongoHandler;
    private UserHandler testing;

    @org.junit.jupiter.api.BeforeAll
    public static void setUp() {
        mongoHandler = new MongoHandler("TestHandler");
    }

    @org.junit.jupiter.api.BeforeEach
    void reset() {
        testing = new UserHandler(mongoHandler);
        testing.collection.drop();
    }

    @org.junit.jupiter.api.AfterEach
    void tearDown() {
        testing.collection.drop();
    }

    @org.junit.jupiter.api.Test
    void insert() { // checks if user is inserting correctly
        assertEquals(testing.collection.countDocuments(), 0);
        String userId = "test_id";
        String firstName = "testfirstname";
        String lastName = "testlastname";
        String email = "testemail";
        testing.insert(userId, firstName, lastName, email);
        User testUser = testing.getUser(userId);
        assertEquals(testUser.getId(), userId);
        assertEquals(testUser.getFirstName(), firstName);
        assertEquals(testUser.getLastName(), lastName);
        assertEquals(testUser.getEmail(), email);
        assertEquals(testing.collection.countDocuments(), 1);

    }

    @org.junit.jupiter.api.Test
    void getUser() { // check if it gets the right
        String userId = "test_id";
        String firstName = "testfirstname";
        String lastName = "testlastname";
        String email = "testemail";
        testing.insert(userId, firstName, lastName, email);
        User testUser = testing.getUser(userId);
        assertEquals(testUser.getId(), userId);
        assertEquals(testUser.getFirstName(), firstName);
        assertEquals(testUser.getLastName(), lastName);
        assertEquals(testUser.getEmail(), email);

        testUser = testing.getUser("wooo"); // make sure non existent user comes back null
        assertNull(testUser);
    }
}