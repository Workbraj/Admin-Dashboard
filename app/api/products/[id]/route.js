// app/api/products/[id]/route.js
import clientPromise from "@lib/monogdb";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db();
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });
  return new Response(JSON.stringify(product), { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db();
  const updatedProduct = await request.json();
  await db
    .collection("products")
    .updateOne({ _id: new ObjectId(id) }, { $set: updatedProduct });
  return new Response(JSON.stringify({ message: "Product updated" }), {
    status: 200,
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db();
  await db.collection("products").deleteOne({ _id: new ObjectId(id) });
  return new Response(JSON.stringify({ message: "Product deleted" }), {
    status: 200,
  });
}
