import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                Active
              </span>
            </td>
            <td>13.05.2024</td>
            <td>$4.350</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>13.05.2024</td>
            <td>$4.350</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                Active
              </span>
            </td>
            <td>13.05.2024</td>
            <td>$4.350</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>13.05.2024</td>
            <td>$4.350</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
