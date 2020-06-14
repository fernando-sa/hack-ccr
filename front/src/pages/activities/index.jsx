import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../layouts/index';
import styles from '../../styles/Main.module.sass';

const Main = () => {
  const [data, setData] = useState([]);
  const setButtonText = (type) => {
    let textButton = 'Dê sua avaliação';
    switch (type) {
      case '1':
        textButton = 'Assista ao vídeo';
        break;
      case '2':
        textButton = 'Responda a pesquisa';
        break;
      default:
        break;
    }
    return textButton;
  };
  const setCardColor = (type) => {
    let color = 'var(--yellow)';
    switch (type) {
      case '1':
        color = 'var(--light-green)';
        break;
      case '2':
        color = 'var(--blue)';
        break;
      default:
        break;
    }
    return color;
  };
  useEffect(() => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    async function fetchData(){
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/activities/board', config);
        setData(data);
        console.log(data)
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
          <a href={`/atividade/${item.id}`} className={styles.card} key={item.id} style={{ backgroundColor: setCardColor(item.type) }}>
            <header className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <strong className={styles.cardPoints}>{item.value}pts</strong>
            </header>
            <div className={styles.cardContent}>
            <p>{item.description}</p>
            </div>
            <footer className={styles.cardFooter}>{setButtonText(item.type)}</footer>
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Main;