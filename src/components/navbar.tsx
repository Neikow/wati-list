import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC } from 'gatsby';
import { useState } from 'react';

import '../navbar.scss';


import { StaticImage } from "gatsby-plugin-image";


const Navbar: React.FC = () => {

  const [ isOpen, setIsOpen ] = useState( false );

  return (
    <>
      <header id='navbar'>
        <Link to='/'>
          <div id='brand'>
            <StaticImage src='../images/color.png'
              alt='logo'
              placeholder="blurred"
              layout="fixed"
              width={60}
              height={60} />
            <h1 id='title'>wati list</h1>
          </div>
        </Link>

        <nav className={'nav' + ( isOpen ? ' shown' : '' )}>
          <ul className='nav-container'>
            <li className='nav-item'>
              <Link to='/team' >la team</Link>
            </li>
            <li className='nav-item'>
              <Link to='/events' >events</Link>
            </li>
            <li className='nav-item'>
              <Link to='/sos' >sos</Link>
            </li>
            <li className='nav-item'>
              <Link to='/parts' >parts</Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => { setIsOpen( !isOpen ); }} className={'hamburger' + ( isOpen ? ' shown' : '' )}>
          <span className="menu material-icons">
            menu
          </span>
          <span className="close material-icons">
            close
          </span>
        </button>
      </header>

    </>
  );
};

export default Navbar;

export const Head: HeadFC = () => <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />;