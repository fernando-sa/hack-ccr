import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../../variables';
import Layout from '../../layouts/index';
import styles from '../../styles/Video.module.sass';

const Video = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getPoints = () => {
    props.history.push('/');
  }
  useEffect(() => {
    async function fetchData(){
      try {
        const { data } = await axios.get(URI_API + '/activities/content/' + id, URI_CONFIG);
        setData(data);
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, []);
  return (
    <Layout pageTitle="Vídeo">
      <div className={styles.video}>
        <div className={styles.questionBlock}>
          <h1 className={styles.title}>Pão com Linguiça</h1>
          <p className={styles.question}>O que você achou dessa parada?</p>
          <iframe
            className={styles.frameVideo}
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Doy5Dlhd_qY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <footer className={styles.footer}>
          <button type="button" className={styles.btnSendAnswer} onClick={() => getPoints()}>Obter pontos</button>
        </footer>
      </div>
    </Layout>
  );
};

export default Video;