import React from 'react';
import '../styles/reset.css';
import '../styles/base.sass';
import styles from '../styles/Question.module.sass';
import Navbar from '../components/Navbar';

const Question = () => {
  return (
    <div className="layout">
      <header className={styles.navbar}>
        <Navbar />
        <span className={styles.navTitle}>Pergunta</span>
      </header>
      <main className={styles.mainContent}>
          <header className={styles.track}>
            <span className={styles.progress} style={{ width: '20%' }} />
            1 de 5 perguntas
          </header>
          <div className={styles.questionBlock}>
            <h1 className={styles.title}>Intraestrutura</h1>
            <p className={styles.question}>O que você achou dessa parada?</p>
            <ul className={styles.options}>
              {([1,2,3,4]).map((item) => (
                <li>
                  <label htmlFor={`op0${item}`} className={styles.label}>
                    <input type="radio" name="option" id={`op0${item}`}/>
                    Infraestrutura muito boa
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <footer className={styles.footer}>
            <button type="button" className={styles.btnSendAnswer}>Responder</button>
          </footer>
      </main>
    </div>
  );
};

export default Question;