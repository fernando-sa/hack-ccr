import React from 'react';
import styles from '../styles/Video.module.sass';

const ActivityVideo = () => {
  return (
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
        <button type="button" className={styles.btnSendAnswer}>Obter pontos</button>
      </footer>
    </div>
  );
};

export default ActivityVideo;