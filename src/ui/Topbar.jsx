import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Topbar = () => {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-purple-100 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SafeIcon icon={FiIcons.FiSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-purple-100 rounded-xl leading-5 bg-purple-50/30 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-200 focus:border-purple-300 sm:text-sm transition-all duration-200"
            placeholder="Search tickets, customers, or articles..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <button className="p-2 text-gray-400 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-colors relative">
          <SafeIcon icon={FiIcons.FiBell} className="text-xl" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="hidden sm:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-colors shadow-sm shadow-purple-200 font-medium text-sm">
          <SafeIcon icon={FiIcons.FiPlus} />
          New Ticket
        </button>
      </div>
    </header>
  );
};

export default Topbar;
