import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const AddProduct = () => {
  const [brandName, setBrandName] = useState('');
  const [modelName, setModelName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      Brand_Name: brandName,
      Model_Name: modelName,
      Price: parseInt(price, 10),
    };

    axios.post('http://localhost:8000/api/productdetails/', newProduct)
      .then(response => {
        console.log('Product added:', response.data);
        setBrandName('');
        setModelName('');
        setPrice('');
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
      });
  };

  return (
    <div className="container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand Name:</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Model Name:</label>
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
