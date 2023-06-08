import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className='header'>
      {showHeader ? (
        <AiOutlineClose
          onClick={() => setShowHeader(!showHeader)}
          className='menu-icon position-fixed top-0 end-0'
        />
      ) : (
        <AiOutlineMenu
          className='menu-icon position-fixed top-0 end-0'
          onClick={() => setShowHeader(!showHeader)}
        />
      )}
      <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
