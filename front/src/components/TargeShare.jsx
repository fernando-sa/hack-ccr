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
        <a href="https://api.whatsapp.com/send?text=Compartilhe%20a%20trucko%20com%20outros%20caminhoneiros%20e%20ganhe%20pontos" className={`${styles.shareButton} ${styles.shareWhatsApp}`}>
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