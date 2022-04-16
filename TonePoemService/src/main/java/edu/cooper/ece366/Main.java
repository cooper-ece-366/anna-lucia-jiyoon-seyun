package edu.cooper.ece366;

import static spark.Spark.*;

public class Main {

    public static void main(String[] args){
        get("/test", (req,res)->{
            return "Woo, we love TonePoem";
        });

    }
}
