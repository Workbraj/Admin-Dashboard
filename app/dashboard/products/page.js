"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@app/ui/dashboard/pagination/pagination";
import styles from "@app/ui/dashboard/products/products.module.css";
import Search from "@app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/getProduct");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addNew}>Add Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    height={40}
                    width={40}
                    className={styles.userImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{new Date(product.createdAt).toLocaleDateString()}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.edit}`}>
                      Edit
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
