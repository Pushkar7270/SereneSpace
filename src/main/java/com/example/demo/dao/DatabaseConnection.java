package com.example.demo.dao;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String dbUrl = "jdbc:mysql://localhost:3306/chatovert";
    private static final String username = "root";
    private static final String password = "password";
    private static Connection connection;


    private DatabaseConnection() {
    }
    public static Connection getConnection() {
        try {
            connection = DriverManager.getConnection(dbUrl, username, password);
        }catch (SQLException e){
            e.printStackTrace();
        }
        return connection;
    }
}
