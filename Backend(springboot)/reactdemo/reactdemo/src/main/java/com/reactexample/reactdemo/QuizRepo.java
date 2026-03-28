package com.reactexample.reactdemo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuizRepo extends MongoRepository<Quiz, String> {
}
