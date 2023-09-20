import React from 'react';
import wheatherLogo from '../../../assets/img/logo.svg';
import styles from './navbar.module.css';

const Navbar = () => {
  const { logo } = styles;

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center ">
        <img className={`navbar-brand ${logo}`} src={wheatherLogo} alt='Logo icono'/>
      </div>
    </nav>
  )
}

export default Navbar