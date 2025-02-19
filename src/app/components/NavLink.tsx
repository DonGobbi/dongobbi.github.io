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
      className="nav-link group relative overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      
      {/* Icon and Text */}
      <div className="relative flex items-center gap-2">
        <FontAwesomeIcon 
          icon={icon} 
          className="transform group-hover:scale-110 transition-transform duration-300"
        />
        <span className="font-medium">{children}</span>
      </div>
      
      {/* Underline Effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  );
};

export default NavLink;
