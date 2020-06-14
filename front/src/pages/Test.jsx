import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Test.module.sass';

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(){
      const result = await axios('http://127.0.0.1:8000/api/teste');
      setData(result.data);
    }
    fetchData();
  }, [])
  return (
    <div className={styles.page}>
      <h1>Just a test</h1>
        <p> DataContent: {data}</p>
      <form action="http://127.0.0.1:8000/api/post">
        <input name="teste" type="text"/>
        <input name="teste2" type="text"/>
        <button>manda</button>
      </form>
    </div>
  );
};

export default Test;