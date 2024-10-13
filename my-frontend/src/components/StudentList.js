// src/components/StudentList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/students/')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  return (
    <div>
      <h2>Students</h2>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <strong>{student.Name}</strong> - {student.Course} - Fees: ${student.fees}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
