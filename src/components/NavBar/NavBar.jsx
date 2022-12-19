import * as userService from '../../utilities/users-service';
import {Link, NavLink, useLocation} from 'react-router-dom';
import './NavBar.css'
// import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';
// import logo from '@/images/logo-full.png';
// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';

// import UserAvatar from '@/views/account/components/UserAvatar';
// import BasketToggle from '../basket/BasketToggle';
// import Badge from './Badge';
// import FiltersToggle from './FiltersToggle';
// import MobileNavigation from './MobileNavigation';
// import SearchBar from './SearchBar';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
     <Link className='logo' to="/orders/new"><img src='https://i.imgur.com/90VZtXM.png' alt="Logo" /></Link>
      <nav  >
        <ul>
         
          <li><NavLink  to='/'>Home</NavLink></li>
          <li><NavLink  to='/shop'>Shop</NavLink></li>
          <li><NavLink  to='/featured'>Featured</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to=''onClick={handleLogOut}>Log out</NavLink></li>
          <li>Welcome, {user.name}</li>
        </ul>
    </nav>
  </>
  );
};
