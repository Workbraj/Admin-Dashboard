import styles from "@app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const singleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src="/noavatar.png" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="John@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
          <label>Phone</label>
          <input type="number" name="phone" placeholder="+1234567890" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="New York" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" required>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" required>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default singleUserPage;
