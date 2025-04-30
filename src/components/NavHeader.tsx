
import React from 'react';
import { Search, User } from 'lucide-react';
import BriLogo from './BriLogo';
import { Input } from './ui/input';

const NavHeader = () => {
  return (
    <header className="w-full">
      <div className="bg-bri-blue py-3 px-5 flex justify-between items-center">
        <BriLogo />
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Cari menu" 
              className="pl-9 pr-3 py-1 rounded text-sm w-56 h-9"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <User className="text-white w-6 h-6" />
        </div>
      </div>
      <nav className="bg-bri-blue border-t border-bri-lightblue px-5">
        <ul className="flex">
          {['Finansial', 'Non Finansial', 'Administrasi', 'General'].map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`text-white px-5 py-3 inline-block hover:bg-bri-lightblue ${index === 0 ? 'bg-bri-lightblue' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
