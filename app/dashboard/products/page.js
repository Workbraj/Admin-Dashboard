import Pagination from "@app/ui/dashboard/pagination/pagination";
import styles from "@app/ui/dashboard/products/products.module.css";
import Search from "@app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";

const ProductsPage = () => {
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
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Test Product
              </div>
            </td>
            <td>This is a test description</td>
            <td>$2.000</td>
            <td>05.03.2023</td>
            <td>30</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
