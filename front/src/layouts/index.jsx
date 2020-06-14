import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import TargePoints from '../components/TargePoints';
import styles from '../styles/Layout.module.sass';
import '../styles/reset.css';
import '../styles/base.sass';

const Layout = (props) => {
  const { children, showPoints } = props;
  return (
    <div className="layout">
      <header className={styles.navbar}>
        <Navbar />
        <span className={styles.navTitle}>Trucko</span>
      </header>
      {showPoints === true && (
        <TargePoints />
      )}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  showPoints: PropTypes.bool,
};

Layout.defaultProps = {
  showPoints: false,
};

export default Layout;