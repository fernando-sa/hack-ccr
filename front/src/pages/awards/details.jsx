import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../../variables';
import Layout from '../../layouts/index';
import styles from '../../styles/GetAward.module.sass';

const Awards = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(){
      try {
        const { data } = await axios.get(URI_API + '/prizes/index/' + id, URI_CONFIG);
        setData(data);
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, []);
  return (
    <Layout pageTitle="Resgatar prêmio">
      <section className={styles.card}>
        <header>
          <h1 className={styles.title}>{data.name}</h1>
          <p className={styles.description}>{data.description}</p>
        </header>
        <div className={styles.code}>
          <h2 className={styles.subtitle}>Informe o código abaixo para utilizar o benefício</h2>
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
          <p>{data.rules}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Awards;