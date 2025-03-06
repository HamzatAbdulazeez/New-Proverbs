import React from 'react';

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-6 text-black text-base font-normal cursor-pointer py-2">
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default SidebarItem;
