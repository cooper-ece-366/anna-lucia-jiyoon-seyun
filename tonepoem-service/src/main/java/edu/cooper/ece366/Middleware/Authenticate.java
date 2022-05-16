//Coded by: Lucia
package edu.cooper.ece366.Middleware;

import edu.cooper.ece366.Mongo.User.UserHandler;
import spark.Request;
import spark.Response;
import spark.Route;

public class Authenticate {
    private static UserHandler userHandler;

    public static void setUserHandler (UserHandler handler) {
        userHandler = handler;
    }
    // interface for the post request to parse the header and validate user
    public interface AuthRoute extends Route {
        default Object handle(Request req, Response res) {
            //request.header();
        return "Woooooo";
        }
    }


}
