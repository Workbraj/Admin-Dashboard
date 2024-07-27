import { connectToDatabase } from "@lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connectToDatabase();
      const products = await db.collection("products").find({}).toArray();

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Unable to fetch products", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
