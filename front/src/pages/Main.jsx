import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../layouts/index';
import styles from '../styles/Main.module.sass';

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    async function fetchData(){
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/activities/board', config);
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, [])
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