import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../../variables';
import Layout from '../../layouts/index';
import styles from '../../styles/Main.module.sass';

const Main = () => {
  const [data, setData] = useState([]);
  const setTypeTreatments = (type, id) => {
    /* 
    ** ACTIVITY_TYPE_VIDEO = 1;
    ** ACTIVITY_TYPE_QUESTION = 2;
    ** ACTIVITY_TYPE_RATING = 3;
    */
   let textButton = 'Dê sua avaliação';
   let color = 'var(--yellow)';
   let url = `/avaliacao/${id}`;
    switch (type) {
      case '1':
        textButton = 'Assista ao vídeo';
        color = 'var(--light-green)';
        url = `/video/${id}`;
        break;
      case '2':
        textButton = 'Responda a pesquisa';
        color = 'var(--blue)';
        url = `/pesquisa/${id}`;
        break;
      default:
        break;
    }
    return {textButton, color, url}
  }
  useEffect(() => {
    async function fetchData(){
      try {
        const { data } = await axios.get(URI_API + '/activities/board', URI_CONFIG);
        const treatedData = data.map(item => {
          const treatments = setTypeTreatments(item.type, item.id);
          return {...item, ...treatments};
        })
        setData(treatedData);
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, []);
  return (
    <Layout showPoints={true}>
      <section className={styles.activities}>
        <h1 className={styles.title}>Minhas atividades</h1>
        {data.map((item) => (
          <a href={item.url} className={styles.card} key={item.id} style={{ backgroundColor: item.color }}>
            <header className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <strong className={styles.cardPoints}>{item.value}pts</strong>
            </header>
            <div className={styles.cardContent}>
            <p>{item.description}</p>
            </div>
            <footer className={styles.cardFooter}>{item.textButton}</footer>
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Main;