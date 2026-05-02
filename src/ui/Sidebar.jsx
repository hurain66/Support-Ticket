import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const navItems = [
  { icon: FiIcons.FiHome, label: 'Dashboard', active: true },
  { icon: FiIcons.FiInbox, label: 'Tickets', badge: '12' },
  { icon: FiIcons.FiUsers, label: 'Customers' },
  { icon: FiIcons.FiBarChart2, label: 'Reports' },
  { icon: FiIcons.FiSettings, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <aside className="w-20 lg:w-64 h-screen bg-white border-r border-purple-100 flex flex-col transition-all duration-300 z-20 fixed md:relative">
      <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-purple-50">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200 shrink-0">
          <SafeIcon icon={FiIcons.FiHeadphones} className="text-white text-lg" />
        </div>
        <span className="ml-3 font-bold text-gray-800 text-xl hidden lg:block tracking-tight">Supar</span>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-2 px-3">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group ${
              item.active
                ? 'bg-purple-50 text-purple-700'
                : 'text-gray-500 hover:bg-gray-50 hover:text-purple-600'
            }`}
          >
            <SafeIcon
              icon={item.icon}
              className={`text-xl shrink-0 ${item.active ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-500'}`}
            />
            <span className="ml-3 font-medium hidden lg:block">{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-purple-100 text-purple-700 py-0.5 px-2 rounded-full text-xs font-bold hidden lg:block">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-purple-50">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-9 h-9 rounded-full ring-2 ring-purple-100 object-cover" />
          <div className="hidden lg:block overflow-hidden">
            <p className="text-sm font-semibold text-gray-700 truncate">Agent Smith</p>
            <p className="text-xs text-gray-500 truncate">smith@supar.io</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
