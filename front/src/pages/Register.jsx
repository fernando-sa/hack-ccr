import React from 'react';
import styles from '../styles/Register.module.sass';
import logo from '../assets/logo.svg';

const Register = () => {
  return (
    <div className={styles.login}>
      <img src={logo} className={styles.logo} alt="Logo Trucko"/>
      <strong className={styles.slogan}>O programa de vantagens do caminhoneiro</strong>
      <p className={styles.message}>Cadastre-se gratuitamente e ganhe R$5 em benefícios + 30 pontos para o cadastro do app</p>
      <section className={styles.cardLogin}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <form action="/">
        <label className={styles.inputText} htmlFor="name">
              Nome completo
              <input type="text" name="name" id="name"/>
            </label>
            <label className={styles.inputText} htmlFor="phone">
              Telefone
              <input type="text" name="name" id="phone"/>
            </label>
            <label className={styles.inputText} htmlFor="phone">
              Cadastre uma senha de acesso
              <input type="password" name="name" id="phone"/>
            </label>
            <div className={styles.inputGroup}>
              <p className={styles.radioQuestion}>
                Qual é a sua classe de caminhoneiro?
              </p>
              <ul className={styles.radioOptionsList}>
                <li>
                  <label className={styles.radioOption} htmlFor="autonomo">
                    <input type="radio" name="type" id="autonomo"/>
                    Autônomo
                  </label>
                </li>
                <li>
                  <label className={styles.radioOption} htmlFor="agregado">
                    <input type="radio" name="type" id="agregado"/>
                    Agregado
                  </label>
                </li>
                <li>
                  <label className={styles.radioOption} htmlFor="contratado">
                    <input type="radio" name="type" id="contratado"/>
                    Contratado
                  </label>
                </li>
              </ul>
            </div>
          <footer className={styles.formFooter}>
          <a href="/" className={styles.btnSaveProfile}>Cadastrar</a>
          </footer>
        </form>
      </section>
      <section className={styles.register}>
        <p>Já possui cadastro? Vá para o login!</p>
        <a href="/login" className={styles.btnRegister}>ir para o login</a>
      </section>
    </div>
  );
};

export default Register;