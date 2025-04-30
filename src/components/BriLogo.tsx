
import React from 'react';

const BriLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="bg-white p-1 rounded">
        <div className="bg-bri-blue text-white font-bold text-sm p-1 rounded">
          <span>BRI</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white text-sm font-bold">New</span>
        <span className="text-bri-orange text-sm font-bold">Delivery System</span>
      </div>
    </div>
  );
};

export default BriLogo;
