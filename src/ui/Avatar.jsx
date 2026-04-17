import React from 'react';

const Avatar = ({ src, initial, name, size = 'md', colorClass = 'bg-purple-100 text-purple-700' }) => {
  const sizes = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-semibold overflow-hidden shrink-0 ${!src ? colorClass : 'bg-gray-100'}`}
      title={name}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
};

export default Avatar;
