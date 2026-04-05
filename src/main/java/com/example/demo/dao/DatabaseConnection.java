package com.example.demo.dao;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Component
public class DatabaseConnection {
    // Static variables to hold database connection details.
    private static String dbUrl;
    private static String username;
    private static String password;
    // inject data base url from application.properties.
    @Value("${spring.datasource.url}")
    public void setDbUrl(String url) { dbUrl = url; }
    //inject username from application.properties.
    @Value("${spring.datasource.username}")
    public void setUsername(String user) { username = user; }
    //inject password from application.properties.
    @Value("${spring.datasource.password}")
    public void setPassword(String pass) { password = pass; }

    private DatabaseConnection() {}
    // establishes and returns a connection to the database using the provided credentials.
    public static Connection getConnection() {
        try {
            return DriverManager.getConnection(dbUrl, username, password);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}
