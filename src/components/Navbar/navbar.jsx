import React, { useState } from 'react';
import styles from './navbar.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>DM<span className={styles.accent}>Xpert</span></span>
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className={styles.ctaWrapper}>
          <a href="#get-started" className={styles.cta}>Get Started</a>
        </li>
      </ul>
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;


