import React from 'react';
import styles from '../styles/Question.module.sass';

const ActivityResearch = () => {
  const type = 'radio';
  return (
    <div className={styles.research}>
      <header className={styles.track}>
        <span className={styles.progress} style={{ width: '20%' }} />
        1 de 5 perguntas
      </header>
      <div className={styles.questionBlock}>
        <h1 className={styles.title}>Intraestrutura</h1>
        <p className={styles.question}>O que você achou dessa parada?</p>
        {type === 'radio' || type === 'checkbox' ? (
          <ul className={styles.options}>
            {([1,2,3,4]).map((item) => (
              <li key={item}>
                <label htmlFor={`op0${item}`} className={styles.label}>
                  <input type={type} name="option" id={`op0${item}`}/>
                  Infraestrutura muito boa
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <textarea className={styles.textarea} name="text" id="text" cols="30" rows="10"></textarea>
        )}
      </div>
      <footer className={styles.footer}>
        <button type="button" className={styles.btnSendAnswer}>Responder</button>
      </footer>
    </div>
  );
};

export default ActivityResearch;