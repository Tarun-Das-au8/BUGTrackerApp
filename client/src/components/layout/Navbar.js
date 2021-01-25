import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import BugContext from '../../context/bug/bugContext';

const Navbar = ({ title}) => {
  const authContext = useContext(AuthContext);
  const bugContext = useContext(BugContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearBugs } = bugContext;

  const onLogout = () => {
    logout();
    clearBugs();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          {/* <i className='fas fa-sign-out-alt'></i>{' '} */}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Signup</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h3>
        {/* <i className={icon} id='logo' /> */}
        {title}
      </h3>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Bug Tracker',
  // icon: 'fas fa-bug',
};

export default Navbar;
