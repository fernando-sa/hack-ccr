import React from 'react';
import Layout from '../layouts/index';
import styles from '../styles/Profile.module.sass';
import defautProfileImage from '../assets/profile.svg';

const Profile = () => {
  return (
    <Layout pageTitle="Meu Perfil">
      <>
        <section className={styles.myProfile}>
          <h1 className={styles.title}>Meu perfil</h1>
          <form action="/">
            <label htmlFor="inputImage" className={styles.profileImage}>
              <img className={styles.image} src={defautProfileImage} alt="Foto de Perfil"/>
              <span className={styles.btnUpload}>Alterar imagem</span>
              <input type="file" className={styles.inputImage} name="inputImage" id="inputImage"/>
            </label>
            <label className={styles.inputText} htmlFor="name">
              Nome completo
              <input type="text" name="name" id="name"/>
            </label>
            <label className={styles.inputText} htmlFor="phone">
              Telefone
              <input type="text" name="name" id="phone"/>
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
              <button type="submit" className={styles.btnSaveProfile}>Salvar Perfil</button>
            </footer>
          </form>
        </section>
        <section className={styles.changePasswd}>
          <h1 className={styles.title}>Alterar Senha</h1>
          <form action="/">
            <label className={styles.inputText} htmlFor="pswd">
              Senha anterior
              <input type="password" name="name" id="pswd"/>
            </label>
            <label className={styles.inputText} htmlFor="newPswd">
              Nova senha
              <input type="password" name="name" id="newPswd"/>
            </label>
            <footer className={styles.formFooter}>
              <button type="submit" className={styles.btnSaveProfile}>Alterar Senha</button>
            </footer>
          </form>
        </section>
      </>
    </Layout>
  );
};

export default Profile;