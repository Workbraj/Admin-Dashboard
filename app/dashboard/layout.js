import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Styles from "./../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.menu}>
        <Sidebar />
      </div>
      <div className={Styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
