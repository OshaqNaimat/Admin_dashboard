import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaExchangeAlt,
  FaChartBar,
  FaFileAlt,
  FaUsersCog,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export const sidebarData = [
  {
    id: 1,
    name: "Pages",
    list: [
      {
        id: 1,
        name: "Dashboard",
        icon: <FaTachometerAlt />,
        path: "/dashboard",
      },
      {
        id: 2,
        name: "Users",
        icon: <FaUsers />,
        path: "/dashboard/user",
      },
      {
        id: 3,
        name: "Show Users",
        icon: <FaBoxOpen />,
        path: "/dashboard/user/showUser",
      },
      {
        id: 4,
        name: "Transaction",
        icon: <FaExchangeAlt />,
        path: "/transactions",
      },
    ],
  },
  {
    id: 2,
    name: "Analytics",
    list: [
      {
        id: 1,
        name: "Revenue",
        icon: <FaChartBar />,
        path: "/revenue",
      },
      {
        id: 2,
        name: "Reports",
        icon: <FaFileAlt />,
        path: "/reports",
      },
      {
        id: 3,
        name: "Teams",
        icon: <FaUsersCog />,
        path: "/teams",
      },
    ],
  },
  {
    id: 3,
    name: "User",
    list: [
      {
        id: 1,
        name: "Settings",
        icon: <FaCog />,
        path: "/settings",
      },
      {
        id: 2,
        name: "Help",
        icon: <FaQuestionCircle />,
        path: "/help",
      },
      {
        id: 3,
        name: "Logout",
        icon: <FaSignOutAlt />,
        path: "/logout",
      },
    ],
  },
];
