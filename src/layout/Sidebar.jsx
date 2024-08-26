import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Track active parent item
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (index) => {
    setActiveIndex(index);
    setOpenSubMenu(openSubMenu === index ? null : index); // Toggle submenu
  };

  const menuItems = [
    {
      name: 'Dashboard',
      submenu: null,
    },
    {
      name: 'Order',
      submenu: ['Team A', 'Team B', 'Team C'],
    },
    {
      name: 'Product',
      submenu: ['List', 'Category'],
    },
    {
      name: 'User',
      submenu: ['user1', 'user2'],
    },
    {
      name: 'Paynment Request',
      submenu: null,
    },
    {
      name: 'Delivery Charge',
      submenu: null,
    },
    {
      name: 'Boost Request',
      submenu: null,
    },
    {
      name: 'Comissions',
      submenu: null,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Mobile menu button */}
      <div className="fixed top-0 left-0 p-4 md:hidden z-20">
        <button onClick={toggleSidebar} className="text-gray-800">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-500 ease-in-out z-20`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="text-lg font-bold">Brand</span>
          <button onClick={toggleSidebar} className="md:hidden">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="mt-10">
          {menuItems.map((item, index) => (
            <div key={index}>
              <a
                href="#"
                className={`flex items-center justify-between py-2.5 px-4 rounded transition-all duration-300 hover:bg-gray-700 ${
                  activeIndex === index ? 'bg-gray-700' : ''
                }`}
                onClick={() => handleSetActive(index)}
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <span>
                    {openSubMenu === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </a>
              {item.submenu && openSubMenu === index && (
                <div className="pl-6">
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      href="#"
                      key={subIndex}
                      className="block py-2.5 px-4 rounded transition-all duration-300 hover:bg-gray-600"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content area */}
      <div className="relative p-10">
        <h1 className="text-2xl font-bold">Main Content</h1>
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default Sidebar;
