import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, trend, trendType, icon }) => {
  const isPositive = trendType === 'positive';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(168,85,247,0.05)] border border-purple-50/50 flex items-start justify-between"
    >
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <div className="mt-2 flex items-center text-xs font-medium">
          <span className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            <SafeIcon icon={isPositive ? FiIcons.FiTrendingUp : FiIcons.FiTrendingDown} className="mr-1" />
            {trend}
          </span>
          <span className="text-gray-400 ml-2">vs last week</span>
        </div>
      </div>
      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
        <SafeIcon icon={FiIcons[icon] || FiIcons.FiActivity} className="text-xl" />
      </div>
    </motion.div>
  );
};

export default StatCard;
