import React from 'react';
import '../styles/reset.css';
import '../styles/base.sass';
import styles from '../styles/Main.module.sass';
import Navbar from '../components/Navbar';
import iconMenu from '../assets/menu.svg';


const Main = () => {
  return (
    <div className="layout">
      <header className={styles.navbar}>
        <Navbar />
        <span className={styles.navTitle}>Trucko</span>
      </header>
      <section className={styles.targePoints}>
        Você possui:
        <strong>2.000</strong>
        pts
      </section>
      <main className={styles.mainContent}>
        <section className={styles.activities}>
          <h1 className={styles.title}>Minhas atividades</h1>
          {[1,2,3,4,5,6].map((item) => (
            <a href="#" className={styles.card}>
              <header className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>Avalie a parada</h2>
                <strong className={styles.cardPoints}>500pts</strong>
              </header>
              <div className={styles.cardContent}>
                <p>Você esteve no Pão de Linguiça hoje ás 19:00. Responda a algumas questões sobre o local!</p>
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

export default Main;