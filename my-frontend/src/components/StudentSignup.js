// src/components/StudentSignup.js

import React, { useState } from 'react';
import axios from 'axios';

const StudentSignup = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const [studentData, setStudentData] = useState({
    name: '',
    mobile_number: '',
    course: '',
    fees: '',
  });

  const handleUserChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStudentChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      user: userData,
      name: studentData.name,
      Mobile_number: studentData.mobile_number,
      course: studentData.course,
      fees: studentData.fees,
    };

    axios.post('http://localhost:8000/api/signup/', requestData)
      .then((response) => {
        console.log('Student signed up successfully', response.data);
        // Clear the form
        setUserData({ username: '', password: '' });
        setStudentData({ name: '', mobile_number: '', course: '', fees: '' });
      })
      .catch((error) => {
        console.error('Error signing up student:', error);
      });
  };

  return (
    <div className="signup-form">
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleUserChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleUserChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleStudentChange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile_number"
            value={studentData.mobile_number}
            onChange={handleStudentChange}
            required
          />
        </div>
        <div>
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={studentData.course}
            onChange={handleStudentChange}
            required
          />
        </div>
        <div>
          <label>Fees:</label>
          <input
            type="number"
            name="fees"
            value={studentData.fees}
            onChange={handleStudentChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default StudentSignup;
