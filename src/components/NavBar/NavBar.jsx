import * as userService from '../../utilities/users-service';
import {Link, NavLink, useLocation} from 'react-router-dom';
import './NavBar.css'



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
          <li><NavLink  to='/product'>Products</NavLink></li>
          <li><NavLink  to='/orders/new'>Place order</NavLink></li>
          <li><NavLink  to='/orders'>Previous orders</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
           &nbsp; | &nbsp;
          <li>Welcome, {user.name}</li>
          <li><NavLink to=''onClick={handleLogOut}>Log out</NavLink></li>
        </ul>
    </nav>
  </>
  );
};
