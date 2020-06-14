import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../../variables';
import Layout from '../../layouts/index';
import TargeShare from '../../components/TargeShare';
import styles from '../../styles/Awards.module.sass';

const Awards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(){
      try {
        const { data } = await axios.get(URI_API + '/prizes/board', URI_CONFIG);
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, []);
  return (
    <Layout showPoints={true} pageTitle="Prêmios">
      <TargeShare />
      <section className={styles.activities}>
        <h1 className={styles.title}>Prêmios disponíveis</h1>
        {data.map((item) => (
          <a href={`/premios/${item}`} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.name}</h2>
            <div className={styles.cardContent}>
              <p>{item.description}</p>
            </div>
            <footer className={styles.cardFooter}>
              Use <strong>{item.price} pontos</strong> para resgatar
            </footer>
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Awards;