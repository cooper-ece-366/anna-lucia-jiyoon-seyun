package edu.cooper.ece366.Mongo.User;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserHandlerTest {

    UserHandler userHandler = new UserHandler();

    @Test
    void insert(){
        userHandler.insert("3", "winston", "thecat", "winston@cooper.edu");
        System.out.println("Check user insert...");
        assertEquals("3", userHandler.getUser("3"));
    }
}
