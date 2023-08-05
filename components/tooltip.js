// components/Tooltip.js
import React from 'react';

const Tooltip = ({ text, children, positionX, positionY }) => {
  return (
    <span className="relative group">
      {children}
      <span
        className={`absolute bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity ${positionX} ${positionY}`}
      >
        {text}
      </span>
    </span>
  );
};

export default Tooltip;






