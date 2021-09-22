
import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';



const NavBar = () => {

  const user = useSelector(state => state.session.user);

  return (
    <nav className='nav-bar'>
      <div className='nav-container'>
        <h1 className='spacestagram-header'>SPACESTAGRAM</h1>
        {user ?
        <div className='logout-btn'>
          <LogoutButton />
        </div>
        : null }
      </div>
    </nav>
  );
}

export default NavBar;
