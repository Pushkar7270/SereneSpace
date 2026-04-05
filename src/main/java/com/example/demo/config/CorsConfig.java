package com.example.demo.config;
//These imports are used for configuration and CORS set up in a Spring Boot application.
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
//The @Configuration annotation indicates that this class contains bean definitions for the application context.
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer(){
        //The @Bean annotation indicates that a method produces a bean to be managed by the Spring container.
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET","POST","PUT","DELETE","OPTIONS");

            }
        };
    }
}
