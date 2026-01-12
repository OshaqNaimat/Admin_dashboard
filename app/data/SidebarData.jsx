import { MdDashboard } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { MdGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";

export const sidebarData = [
  {
    id: 1,
    section: "Pages",
    Lists: [
      {
        id: 1,
        name: "Dashboard",
        icon: <MdDashboard />,
        path: "/dashboard",
      },
      {
        id: 2,
        name: "Users",
        icon: <FaUsers />,
        path: "/users",
      },
      {
        id: 3,
        name: "Products",
        icon: <HiShoppingBag />,
        path: "/products",
      },
      {
        id: 4,
        name: "Transaction",
        icon: <RiExchangeDollarLine />,
        path: "/transactions",
      },
    ],
  },
  {
    id: 2,
    section: "Analytics",
    Lists: [
      {
        id: 1,
        name: "Revenue",
        icon: <MdOutlineAnalytics />,
        path: "/revenue",
      },
      {
        id: 2,
        name: "Reports",
        icon: <TbReportAnalytics />,
        path: "/reports",
      },
      {
        id: 3,
        name: "Teams",
        icon: <MdGroups />,
        path: "/teams",
      },
    ],
  },
  {
    id: 3,
    section: "User",
    Lists: [
      {
        id: 1,
        name: "Settings",
        icon: <IoSettingsOutline />,
        path: "/settings",
      },
      {
        id: 2,
        name: "Help",
        icon: <FiHelpCircle />,
        path: "/help",
      },
      {
        id: 3,
        name: "Logout",
        icon: <FiLogOut />,
        action: "logout",
      },
    ],
  },
];

export default sidebarData;
