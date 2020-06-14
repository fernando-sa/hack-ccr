import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../../variables';
import Layout from '../../layouts/index';
import styles from '../../styles/Rating.module.sass';

const Rating = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  function teste(id) {
    for (let i = 1; i <= id; i++) {
      document.getElementById('star_' + i).style.fill = "var(--yellow)";
    }
    for (let i = id + 1; i <= 5; i++) {
      document.getElementById('star_' + i).style.fill = "";
    }    
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
    <Layout pageTitle="Avaliação">
      <div className={styles.rating}>
      <div className={styles.questionBlock}>
        <h1 className={styles.title}>Pão com Linguiça</h1>
        <p className={styles.question}>O que você achou dessa parada?</p>
        <ul className={styles.ratingOptions}>
          {[1,2,3,4,5].map(item => (
            <li>
              <input type="radio" className={styles.inputRating} name="rate" id={`rate_${item}`}/>
              <label htmlFor={`rate_${item}`} className={styles.rateButton} key={item}>
                <svg onClick={() => {teste(item)}} version="1.1" id={`star_${item}`} className={styles.star} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" stroke="#F2B84B" strokeWidth="20px" xmlSpace="preserve">
                <g>
                  <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                  </g>
                </svg>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <button type="button" className={styles.btnSendAnswer}>Obter pontos</button>
      </footer>
    </div>
    </Layout>
  );
};

export default Rating;