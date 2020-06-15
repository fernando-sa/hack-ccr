import React from 'react';
import Layout from '../layouts/index';
import styles from '../styles/Page404.module.sass';
import iconError from '../assets/error-404.svg';

const Page404 = () => {
  return (
    <Layout>
      <div className={styles.notFound}>
        <h1 className={styles.title}>Página não encontrada</h1>
        <img src={iconError} alt="Erro 404" className={styles.imageError}/>
        <p>Não encontramos a página que você solicitou</p>
        <a href="/" className={styles.goToHome}>Vá para a página inicial</a>
      </div>
    </Layout>
  );
};

export default Page404;