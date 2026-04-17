import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200',
    red: 'bg-red-50 text-red-700 border border-red-200',
    orange: 'bg-orange-50 text-orange-700 border border-orange-200',
    green: 'bg-green-50 text-green-700 border border-green-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
