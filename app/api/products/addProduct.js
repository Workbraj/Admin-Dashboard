export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, category, price, stock, color, size, description } =
      req.body;

    try {
      const db = await connectToDatabase();
      const result = await db.collection("products").insertOne({
        title,
        category,
        price,
        stock,
        color,
        size,
        description,
        createdAt: new Date().toISOString(),
      });

      res
        .status(201)
        .json({
          message: "Product added successfully",
          product: result.ops[0],
        });
    } catch (error) {
      console.error("Error adding product:", error);
      res
        .status(500)
        .json({
          message: "Unable to add product",
          error: error.message || error.toString(),
        });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
