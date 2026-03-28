import React, { useEffect, useState } from "react";

function ViewStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/quiz")
      .then(res => res.json())
      .then(data => setStudents(data));

  }, []);

  const deleteStudent = (id) => {

    fetch(`http://localhost:8080/quiz/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setStudents(students.filter(s => s.id !== id));
      });

  };

  return (

    <div>

      <h2>Quiz Scores</h2>

      <table border="1" style={{ margin: "auto", borderCollapse: "collapse" }}>

        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {students.map((s) => (

            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.rollno}</td>
              <td>{s.score}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <a href="/">
        <button>Back to Quiz</button>
      </a>

    </div>
  );
}

export default ViewStudents;