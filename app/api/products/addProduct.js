const Product = require("../models/Product");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, price, description, category, stock } = req.body;
      const newProduct = new Product({
        name,
        price,
        description,
        category,
        stock,
      });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error adding product:", error); // Log the error to the console
      res
        .status(500)
        .json({ message: "Error adding product", error: error.message }); // Send a more detailed error message
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
