import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../../variables';
import Layout from '../../layouts/index';
import Modal from '../../components/Modal';
import styles from '../../styles/Video.module.sass';

const Video = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const getPoints = () => {
    setOpenModal(true);
  }
  useEffect(() => {
    async function fetchData(){
      try {
        const { data } = await axios.get(URI_API + '/activities/content/' + id, URI_CONFIG);
        setData(data[0]);
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
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.question}>{data.description}</p>
          <iframe
            className={styles.frameVideo}
            width="100%"
            src="https://www.youtube.com/embed/Doy5Dlhd_qY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <footer className={styles.footer}>
          <button type="button" className={styles.btnSendAnswer} onClick={() => getPoints()}>Obter pontos</button>
        </footer>
        <Modal title="Atividade concluída" openModal={openModal} actionOnClose={() => props.history.push('/')}>
          Obrigada por assistir ao vídeo! Seus pontos serão creditados na conta!
        </Modal>
      </div>
    </Layout>
  );
};

export default Video;