// src/App.js

import React from 'react';
import ProductList from './components/ProductList';
import StudentList from './components/StudentList';
import AddProduct from './components/AddProduct';
import StudentSignup from './components/StudentSignup';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Django and React Integration</h1>
      <AddProduct />
      <ProductList />
      <StudentList />
      <StudentSignup />

    </div>
  );
}

export default App;
