"use client";

import { useState } from "react";
import axios from "axios";
import styles from "@app/ui/dashboard/products/addProducts/addProducts.module.css";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    color: "",
    size: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post("/api/products/addProduct", newProduct);
      setMessage("Product added successfully!");
      setFormData({
        title: "",
        category: "",
        price: "",
        stock: "",
        color: "",
        size: "",
        description: "",
      });
    } catch (error) {
      setMessage(
        `Error adding product: ${
          error.response ? error.response.data.message : "Network error"
        }`
      );
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          id="cat"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Choose a Category</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="utilities">Utilities</option>
          <option value="kitchen">Kitchen</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          value={formData.size}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          id="description"
          rows={16}
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProductPage;
