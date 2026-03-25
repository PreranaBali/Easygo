import React from 'react';

const CategoryCard = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100 group">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:shadow text-black">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
        {title}
      </span>
    </div>
  );
};

export default CategoryCard;