import React from 'react';
import Layout from '../layouts/index';
import styles from '../styles/GetAward.module.sass';

const Awards = () => {
  return (
    <Layout>
      <section className={styles.card}>
        <header>
          <h1 className={styles.title}>Manutenção com 50% off</h1>
          <p className={styles.description}>Faça uma manutenção no seu caminhão na Chevrolet, com 50% de desconto!</p>
        </header>
        <div className={styles.code}>
          <h2 className={styles.subtitle}>Manutenção com 50% off</h2>
          <strong className={styles.codeHash}>#1sa14154</strong>
        </div>
        <div className={styles.partner}>
          <h3 className={styles.subtitle}>Sobre o parceiro</h3>
          <h4 className={styles.partnerName}>Chevrolet</h4>
          <h5 className={styles.partnerBusiness}>Conessionária de Carro</h5>
          <address className={styles.partnerAddress}>Av. Presidente Itamar Franco, 3087, Juiz de Fora - MG</address>
        </div>
        <div className={styles.rules}>
          <h3 className={styles.subtitle}>Regras para usar o benefício</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Awards;