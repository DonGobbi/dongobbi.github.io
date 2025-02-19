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
      className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#61DAFB] transition-colors duration-300 relative group"
    >
      <FontAwesomeIcon 
        icon={icon} 
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
      <span className="text-sm sm:text-base font-medium">{children}</span>
      
      {/* Underline effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#61DAFB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  );
};

export default NavLink;
