import React from 'react';
import iconWhatsApp from '../assets/whatsapp.svg';
import iconFacebook from '../assets/facebook.svg';
import styles from '../styles/TargeShare.module.sass';

const TargeShare = () => {
  return (
    <section className={styles.shareTarge}>
      <h3 className={styles.title}>Compartilhe e ganhe pedágio grátis</h3>
      <p>Ganhe um pedágio grátis para você e seu amigo a cada indicação cadastrada.</p>
      <footer className={styles.shareButtons}>
        <a href="/" className={`${styles.shareButton} ${styles.shareWhatsApp}`}>
          <img src={iconWhatsApp} alt="WhatsApp"/>
          WhatsApp
        </a>
        <a href="/" className={`${styles.shareButton} ${styles.shareFacebook}`}>
          <img src={iconFacebook} alt="Facebook"/>
          Facebook
        </a>
      </footer>
    </section>
);
};

export default TargeShare;