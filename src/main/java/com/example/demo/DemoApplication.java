package com.example.demo; //belongs to the package com.example.demo.

//importing necessary classes from the Spring Boot framework.
import org.springframework.boot.SpringApplication;//
import org.springframework.boot.autoconfigure.SpringBootApplication;

//The @SpringBootApplication annotation is a convenience annotation that adds all of the following:
@SpringBootApplication
public class DemoApplication {
    //The main method is the entry point of the application. It uses SpringApplication.run() to launch the application.
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
