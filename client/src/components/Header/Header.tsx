import React from 'react';
import { NavLink } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { useStore } from '../../hooks/hooks';
import './Header.scss';

const Header: React.FC = () => {
  const authStore = useStore('authStore')
  return (
    <div className="Header">
      <div>GoodDayClone</div>
      {authStore.isAuth 
      ?  <Alert severity="success">You were authorized</Alert>
      : <Alert severity="error">Please login or register!</Alert>}
      {!authStore.isAuth ? <div>
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/register" >Register</NavLink>
      </div>
        : <NavLink to="/logout" >Logout</NavLink>
      }

    </div>
  )
}

export default Header;
