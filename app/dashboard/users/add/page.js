import styles from "@app/ui/dashboard/users/addUsers/addUsers.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="username" placeholder="User Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="password" placeholder="Password" required />
        <input type="number" name="phone" placeholder="Phone" />
        <select name="isAdmin" id="isAdmin" required>
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive" required>
          <option value={false} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

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

export default AddUserPage;
