import React, { useState } from "react";

function Quiz() {

  const [quiz, setQuiz] = useState({
    name: "",
    rollno: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const submitQuiz = () => {

    fetch("http://localhost:8080/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quiz)
    })
      .then(res => res.json())
      .then(data => {
        alert("Quiz Submitted! Score Saved");
        console.log(data);
      });

  };

  return (
    

    <div style={{textAlign:"left"}}>

      <h2>Online Quiz</h2>

      Name:
      <input name="name" onChange={handleChange} />
      <br /><br />

      Roll No:
      <input name="rollno" onChange={handleChange} />
      <br /><br />

      <p>1. Which language is used in Spring Boot?</p>
      <input type="radio" name="q1" value="correct" onChange={handleChange} />Java
      <input type="radio" name="q1" value="wrong" onChange={handleChange} />Python
      <input type="radio" name="q1" value="wrong" onChange={handleChange} />C
      <input type="radio" name="q1" value="wrong" onChange={handleChange} />PHP

      <p>2. HTML stands for?</p>
      <input type="radio" name="q2" value="correct" onChange={handleChange} />Hyper Text Markup Language
      <input type="radio" name="q2" value="wrong" onChange={handleChange} />High Text Machine Language
      <input type="radio" name="q2" value="wrong" onChange={handleChange} />Hyper Tool Multi Language
      <input type="radio" name="q2" value="wrong" onChange={handleChange} />None

      <p>3. CSS is used for?</p>
      <input type="radio" name="q3" value="correct" onChange={handleChange} />Styling
      <input type="radio" name="q3" value="wrong" onChange={handleChange} />Programming
      <input type="radio" name="q3" value="wrong" onChange={handleChange} />Database
      <input type="radio" name="q3" value="wrong" onChange={handleChange} />Server

      <p>4. Which database works well with Spring Boot?</p>
      <input type="radio" name="q4" value="correct" onChange={handleChange} />MySQL
      <input type="radio" name="q4" value="wrong" onChange={handleChange} />Paint
      <input type="radio" name="q4" value="wrong" onChange={handleChange} />Photoshop
      <input type="radio" name="q4" value="wrong" onChange={handleChange} />Excel

      <p>5. What is POJO?</p>
      <input type="radio" name="q5" value="wrong" onChange={handleChange} />Parameter of java object
      <input type="radio" name="q5" value="correct" onChange={handleChange} />Plain Old Java Object
      <input type="radio" name="q5" value="wrong" onChange={handleChange} />Public ordered Java object
      <input type="radio" name="q5" value="wrong" onChange={handleChange} />Private ordered Java object

      <br /><br />

      <button onClick={submitQuiz}>Submit Quiz</button>

      <br /><br />

    </div>
  );
}

export default Quiz;