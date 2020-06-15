import React from 'react';
import styles from '../styles/Register.module.sass';
import logo from '../assets/logo.svg';

const Login = () => {
  return (
    <div className={styles.login}>
      <img src={logo} className={styles.logo} alt="Logo Trucko"/>
      <strong className={styles.slogan}>O programa de vantagens do caminhoneiro</strong>
      <section className={styles.cardLogin}>
        <h1 className={styles.title}>Login</h1>
        <form action="/">
          <label className={styles.inputText} htmlFor="email">
            E-mail
            <input type="text" name="name" id="email"/>
          </label>
          <label className={styles.inputText} htmlFor="newPswd">
            Nova Senha
            <input type="password" name="name" id="newPswd"/>
          </label>
          <footer className={styles.formFooter}>
          <a href="/" className={styles.btnSaveProfile}>Entrar</a>
          </footer>
        </form>
      </section>
      <section className={styles.register}>
        <h2 className={styles.title}>Ainda não tenho cadastro</h2>
        <p>Cadastre-se gratuitamente e ganhe R$5 em benefícios + 30 pontos para o cadastro do app</p>
        <a href="/cadastro" className={styles.btnRegister}>Quero me cadastrar</a>
      </section>
    </div>
  );
};

export default Login;