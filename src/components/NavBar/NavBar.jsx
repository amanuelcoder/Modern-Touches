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
    <nav className="navbar2" >
      <div className="header2"> 
      <ul className="menu2">
        <Link  to="/orders/new"><img alt="Logo" /></Link>
        <NavLink exact to='/'><p>Home</p></NavLink>
        <NavLink  to='/shop'>Shop</NavLink>
        <li className="menu2><NavLink  to='/featured'>Featured</NavLink></li>
        <li className="menu2><NavLink to='/recommended'>Recommended</NavLink></li>
        <span>Welcome, {user.name}</span>
        <li><NavLink to=''onClick={handleLogOut}>Log Out</NavLink></li>
      </ul>
      </div>
    </nav>
  );
};
