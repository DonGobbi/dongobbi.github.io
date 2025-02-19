'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useScrollTo } from '../hooks/useScrollTo';

interface NavLinkProps {
  href: string;
  icon: IconDefinition;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, children }) => {
  const scrollTo = useScrollTo();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#61DAFB] transition-colors duration-300 relative group"
    >
      {/* Icon */}
      <FontAwesomeIcon 
        icon={icon} 
        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Text - Hidden on mobile, visible on larger screens */}
      <span className="hidden sm:inline font-medium">{children}</span>
      
      {/* Mobile text - Visible only on hover on mobile */}
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-xs bg-[#61DAFB] text-gray-900 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden whitespace-nowrap">
        {children}
      </span>
      
      {/* Underline effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#61DAFB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  );
};

export default NavLink;
