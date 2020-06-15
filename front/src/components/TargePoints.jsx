import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../variables';

import styles from '../styles/TargePoints.module.sass';

const TargePoints = () => {
  const [points, setData] = useState(0);
  useEffect(() => {
    async function fetchData(){
      try {
        const { data } = await axios.get(URI_API + '/user/points/1', URI_CONFIG);
        setData(data);
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, []);  
  return (
    <section className={styles.targePoints}>
      Você possui:
      <strong>{points}</strong>
      pts
    </section>
  );
};

export default TargePoints;