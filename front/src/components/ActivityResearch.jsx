import React from 'react';
import QuestionRadio from './QuestionTypes/QuestionRadio'
import styles from '../styles/Question.module.sass';

const ActivityResearch = () => {
  return (
    <div className={styles.research}>
      <header className={styles.track}>
        <span className={styles.progress} style={{ width: '20%' }} />
        1 de 5 perguntas
      </header>
      <QuestionRadio />
      <footer className={styles.footer}>
        <button type="button" className={styles.btnSendAnswer}>Responder</button>
      </footer>
    </div>
  );
};

export default ActivityResearch;