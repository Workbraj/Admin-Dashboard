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
        <div className={Styles.rights}>
          <p>2024 Raj. All Rights Reserved</p>
          <p>
            Developed by
            <a href="mailto:work.brajbhujel@gmail.com"> Bishawa Raj Bhujel</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
