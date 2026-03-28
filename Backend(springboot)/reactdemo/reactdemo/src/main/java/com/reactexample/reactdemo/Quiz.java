package com.reactexample.reactdemo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "students")
public class Quiz {
    @Id
    private String id;
    private String name;
    private Integer rollno;
    String q1,q2,q3,q4,q5;
    Integer score;
}
