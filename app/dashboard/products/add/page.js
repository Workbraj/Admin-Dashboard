import styles from "@app/ui/dashboard/products/addProducts/addProducts.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="tilte" placeholder="Title" required />
        <select name="cat" id="cat" required>
          <option value="general">Choose a Category</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="utilities">Utilities</option>
          <option value="kitchen">Kitchen</option>
          Category
        </select>
        <input type="number" name="price" placeholder="Price" required />
        <input type="number" name="stock" placeholder="Stock" required />
        <input type="text" name="color" placeholder="Color" required />
        <input type="text" name="size" placeholder="Size" required />
        <textarea
          name="description"
          id="description"
          rows={16}
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
