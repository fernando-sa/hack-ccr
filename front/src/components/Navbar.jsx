import React from 'react';
import styles from  '../styles/Navbar.module.sass';
import iconBack from '../assets/back.svg';

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <input className={styles.changeMenu} id="changeMenu" type="checkbox" />
      <label htmlFor="changeMenu">
        <svg className={styles.iconMenu}>
          <line x1="0" y1="6" x2="32" y2="6" stroke="#fff" strokeWidth="3"></line>
          <line x1="0" y1="16" x2="32" y2="16" stroke="#fff" strokeWidth="3"></line>
          <line x1="0" y1="26" x2="32" y2="26" stroke="#fff" strokeWidth="3"></line>
        </svg>
      </label>
      <nav className={styles.navbar}>
        <div className={styles.navHeader}>
          <span className={styles.navTitle}>Menu</span>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#" className={`${styles.navLink} ${styles.isActive}`}>Página Inicial</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Prêmios</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Meu perfil</a>
          </li>
          <li className={`${styles.navItem} ${styles.inviteFriends}`}>
            <a href="#" className={styles.navLink}>Convidar Amigos</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Sair</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;