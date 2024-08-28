import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import companyIcon from '../assets/logo/companyLogo.png';
import companyName from '../assets/logo/company-name.png';
import { Gauge, CalendarCog, Component, ListTodo, Tags, ClipboardMinus, ClipboardCopy, UserCog, UserPen,UserRoundSearch, HandCoins,Truck, BadgePercent, Rocket} from 'lucide-react';


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
    { name: 'Dashboard', icon: Gauge, submenu: null, to: '/admin-dashboard/dashboard' },
    {
      name: 'Order',
      icon: CalendarCog,
      submenu: [
        { name: 'Team A', to: '/order/team-a', icon: ClipboardMinus},
        { name: 'Team B', to: '/order/team-b', icon: ClipboardCopy},
      ],
    },
    {
      name: 'Product',
      icon: Tags ,
      submenu: [
        { name: 'List', to: '/admin-dashboard/product/list', icon: ListTodo},
        { name: 'Category', to: '/product/category', icon: Component},
      ],
    },
    {
      name: 'User',
      icon: UserCog,
      submenu: [
        { name: 'User-1', to: '/user/user-1', icon: UserPen},
        { name: 'User-2', to: '/user/user-2', icon: UserRoundSearch},
      ],
    },
    { name: 'Payment Request', icon: HandCoins, submenu: null, to: '/payment-request' },
    { name: 'Delivery Charge', icon: Truck, submenu: null, to: '/delivery-charge' },
    { name: 'Boost Requests', icon: Rocket, submenu: null, to: '/boost-request' },
    { name: 'Commission', icon: BadgePercent, submenu: null, to: '/commission' },
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-[#f8fafc] text-black w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-20`}
          >
              {/* company name & logo */}
        <div className="p-4">
          <NavLink to="/" className="text-lg font-bold">
            <span><img className='mx-auto h-5 sm:h-10' src={companyIcon} alt="Company Icon" /></span>
            <span><img className='mx-auto h-4 sm:h-8' src={companyName} alt="Company Name" /></span>
          </NavLink>
        </div>
        <nav className="mt-8 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.to || '#'}
                className={`flex text-lg items-center justify-between py-2.5 px-4 font-semibold border rounded ${
                  !item.submenu && location.pathname === item.to ? 'bg-[#139FAD] text-white' : ''
                }`}
                onClick={() => handleSetActive(index, !!item.submenu)}
              >
                <div className="flex items-center justify-center">
                  {item.icon && <item.icon className="mr-3" />}
                  <span>{item.name}</span>
                </div>
                {item.submenu && (
                  <span>
                    {openSubMenu === index ? <FaChevronDown /> : <FaChevronRight />}
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
                        location.pathname === subItem.to ? 'bg-[#139FAD] text-white' : 'hover:bg-gray-200'
                      }`}
                      onClick={handleSubmenuClick}
                    >
                      <subItem.icon className="mr-3 items-center justify-center " />
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
