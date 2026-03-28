import React, { useState } from "react";
import Quiz from "./Quiz";
import ViewStudents from "./ViewStudents";

function App() {

  const [page, setPage] = useState("quiz");

  return (
    <div style={{
      width: "600px",
      margin: "auto",
      textAlign: "center",
  background: "beige",
  padding: "20px",
  fontFamily: "Arial"
    }}>

      <h1>Student Quiz Application</h1>

      <button onClick={() => setPage("quiz")}>
        Take Quiz
      </button>
      <br></br>
      <br></br>

      <button onClick={() => setPage("view")}>
        View Scores
      </button>

      <hr />

      {page === "quiz" && <Quiz  />}

      {page === "view" && <ViewStudents />}

    </div>
  );
}

export default App;