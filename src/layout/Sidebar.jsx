import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import companyIcon from "../assets/logo/companyLogo.png";
import companyName from "../assets/logo/company-name.png";
import {
  Gauge,
  CalendarCog,
  Component,
  ListTodo,
  Tags,
  HandCoins,
  Truck,
  BadgePercent,
  Rocket,
  PackagePlus,
  MessageCircleQuestion,
} from "lucide-react";
import { Logs } from "lucide-react";
import { MdOutlineCategory } from "react-icons/md";
import {
  MicVocal,
  ClipboardMinus,
  ClipboardCopy,
  FolderPlus,
} from "lucide-react";
import { PiUserListBold } from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (index, hasSubmenu) => {
    setOpenSubMenu(openSubMenu === index ? null : index);

    if (!hasSubmenu && isOpen) {
      setIsOpen(false);
    }
  };

  const handleSubmenuClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: Gauge,
      submenu: null,
      to: "/admin-dashboard/home",
    },
    {
      name: "Order",
      icon: CalendarCog,
      submenu: [
        {
          name: "Place order",
          to: "/admin-dashboard/place-order",
          icon: MdOutlineCategory,
        },
        { name: "Order list", to: "/admin-dashboard/order-list", icon: Logs },
        {
          name: "Order Details",
          to: "/admin-dashboard/product/order-details",
          icon: ClipboardMinus,
        },
        { name: "Team B", to: "/order/team-b", icon: ClipboardCopy },
      ],
    },
    {
      name: "Product",
      icon: Tags,
      submenu: [
        { name: "List", to: "/admin-dashboard/product/list", icon: ListTodo },
        {
          name: "Category",
          to: "/admin-dashboard/product/category",
          icon: Component,
        },
        {
          name: "Add product TODO",
          to: "/admin-dashboard/product/add-product",
          icon: PackagePlus,
        },
        {
          name: "Announcement",
          to: "/admin-dashboard/product/announcement",
          icon: MicVocal,
        },
        {
          name: "Create Announcement",
          to: "/admin-dashboard/product/create-announcement",
          icon: FolderPlus,
        },
      ],
    },
    {
      name: "User",
      to: "/admin-dashboard/user",
      icon: PiUserListBold,
      submenu: null,
    },
    {
      name: "Payment Request",
      icon: HandCoins,
      submenu: null,
      to: "/payment-request",
    },
    {
      name: "Delivery Charge",
      icon: Truck,
      submenu: null,
      to: "/admin-dashboard/delivery-charge",
    },
    {
      name: "Boost Requests",
      icon: Rocket,
      submenu: null,
      to: "/boost-request",
    },
    {
      name: "Commission",
      icon: BadgePercent,
      submenu: null,
      to: "/admin-dashboard/commission",
    },
    {
      name: "Support",
      icon: MessageCircleQuestion,
      submenu: null,
      to: "/admin-dashboard/support",
    },
  ];

  return (
    <div className="h-screen">
      {/* Mobile menu button */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className="text-gray-800">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-[#f8fafc] text-black w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-20`}
      >
        {/* company name & logo */}
        <div className="p-4">
          <NavLink to="/" className="text-lg font-bold">
            <span>
              <img
                className="mx-auto h-5 sm:h-10 mb-1"
                src={companyIcon}
                alt="Company Icon"
              />
            </span>
            <span>
              <img
                className="mx-auto h-4 sm:h-8"
                src={companyName}
                alt="Company Name"
              />
            </span>
          </NavLink>
        </div>
        <nav className="mt-8 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.to || "#"}
                className={`flex text-lg items-center justify-between py-2.5 px-4 font-semibold border rounded ${
                  location.pathname === item.to ||
                  item.submenu?.some((sub) => location.pathname === sub.to)
                    ? "bg-[#139FAD] text-white"
                    : "bg-white"
                }`}
                onClick={() => handleSetActive(index, !!item.submenu)}
              >
                <div className="flex items-center justify-center">
                  {item.icon && <item.icon className="mr-3 size-5" />}
                  <span>{item.name}</span>
                </div>
                {item.submenu && (
                  <span>
                    {openSubMenu === index ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </span>
                )}
              </NavLink>

              {item.submenu && openSubMenu === index && (
                <div className="pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <NavLink
                      to={subItem.to}
                      key={subIndex}
                      className={`flex items-center py-2 px-4 rounded ${
                        location.pathname === subItem.to
                          ? "bg-[#139FAD] text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={handleSubmenuClick}
                    >
                      <subItem.icon className="mr-3 size-4" />
                      <span>{subItem.name}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
