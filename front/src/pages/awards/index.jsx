import React from 'react';
import Layout from '../../layouts/index';
import TargeShare from '../../components/TargeShare';
import styles from '../../styles/Awards.module.sass';

const Awards = () => {
  return (
    <Layout showPoints={true} pageTitle="Prêmios">
      <TargeShare />
      <section className={styles.activities}>
        <h1 className={styles.title}>Prêmios disponíveis</h1>
        {[1,2,3,4,5,6].map((item) => (
          <a href={`/premios/${item}`} className={styles.card}>
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
    </Layout>
  );
};

export default Awards;