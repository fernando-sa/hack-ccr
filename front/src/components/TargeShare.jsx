import React from 'react';
import iconWhatsApp from '../assets/whatsapp.svg';
import iconFacebook from '../assets/facebook.svg';
import styles from '../styles/TargeShare.module.sass';

const TargeShare = () => {
  return (
    <section className={styles.shareTarge}>
      <h3 className={styles.title}>Promoção de lançamento da CCR</h3>
      <p>Convide um amigo e ganhe R$5 em benefícios + 30 pontos para o cadastro do app</p>
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