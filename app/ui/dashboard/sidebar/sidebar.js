import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdSafetyCheck,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    lists: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    lists: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Report",
        path: "/dashboard/report",
        icon: <MdAnalytics />,
      },
      {
        title: "Team",
        path: "/dashboard/team",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    lists: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdSafetyCheck />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50px"
          height="50px"
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.lists}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.lists.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <div className={styles.logout}>
        <MdLogout />
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
