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
      className="nav-link group relative px-4 py-2 text-white transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center gap-2 sm:text-base text-sm">
        <FontAwesomeIcon 
          icon={icon} 
          className="transform group-hover:scale-110 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5"
        />
        <span className="font-medium hidden sm:inline">{children}</span>
      </div>
      
      {/* Modern underline effect */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
  );
};

export default NavLink;
