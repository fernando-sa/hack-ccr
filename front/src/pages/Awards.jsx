import React from 'react';
import '../styles/reset.css';
import '../styles/base.sass';
import styles from '../styles/Awards.module.sass';
import Navbar from '../components/Navbar';
import iconWhatsApp from '../assets/whatsapp.svg';
import iconFacebook from '../assets/facebook.svg';

const Awards = () => {
  return (
    <div className="layout">
      <header className={styles.navbar}>
        <Navbar />
        <span className={styles.navTitle}>Prêmios</span>
      </header>
      <section className={styles.targePoints}>
        Você possui:
        <strong>2.000</strong>
        pts
      </section>
      <main className={styles.mainContent}>
        <section className={styles.shareTarge}>
          <h3 className={styles.title}>Compartilhe e ganhe pedágio grátis</h3>
          <p>Ganhe um pedágio grátis para você e seu amigo a cada indicação cadastrada.</p>
          <footer className={styles.shareButtons}>
            <a href="#" className={`${styles.shareButton} ${styles.shareWhatsApp}`}>
              <img src={iconWhatsApp} alt="WhatsApp"/>
              WhatsApp
            </a>
            <a href="#" className={`${styles.shareButton} ${styles.shareFacebook}`}>
              <img src={iconFacebook} alt="Facebook"/>
              Facebook
            </a>
          </footer>
        </section>
        <section className={styles.activities}>
          <h1 className={styles.title}>Prêmios disponíveis</h1>
          {[1,2,3,4,5,6].map((item) => (
            <a href="#" className={styles.card}>
              <h2 className={styles.cardTitle}>Manutenção com 50% off</h2>
              <div className={styles.cardContent}>
                <p>Agende uma troca de óleo grátis na oficina do Marcão!</p>
              </div>
              <footer className={styles.cardFooter}>
                Responder à pesquisa
              </footer>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Awards;