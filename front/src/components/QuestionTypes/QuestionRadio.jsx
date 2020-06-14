import React from 'react';
import styles from '../../styles/QuestionRadio.module.sass';

const QuestionRadio = () => {
  return (
    <div className={styles.questionBlock}>
      <h1 className={styles.title}>Intraestrutura</h1>
      <p className={styles.question}>O que você achou dessa parada?</p>
      <ul className={styles.options}>
        {([1,2,3,4]).map((item) => (
          <li key={item}>
            <label htmlFor={`op0${item}`} className={styles.label}>
              <input type="radio" name="option" id={`op0${item}`}/>
              Infraestrutura muito boa
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionRadio;