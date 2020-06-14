import React from 'react';
import Layout from '../layouts/index';
import styles from '../styles/Main.module.sass';

const Main = () => {
  return (
    <Layout showPoints={true}>
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
    </Layout>
  );
};

export default Main;