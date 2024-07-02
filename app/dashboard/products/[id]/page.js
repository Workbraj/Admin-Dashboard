import styles from "@app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const singleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src="/noproduct.jpg" fill />
        </div>
        Test Product
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Test Product" />
          <label>Price</label>
          <input type="number" name="email" placeholder="$000" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="Stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Color" />
          <label>Size</label>
          <input type="text" name="size" placeholder="Size" />
          <label>Category</label>
          <select name="cat" id="cat" required>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="utilities">Utilities</option>
            <option value="kitchen">Kitchen</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default singleProductPage;
