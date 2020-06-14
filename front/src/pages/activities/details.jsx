import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../layouts/index';
import ActivityResearch from '../../components/ActivityResearch'

const Question = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    async function fetchData(){
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/activities/board', config);
        setData(data);
        console.log(data)
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, []);
  return (
    <Layout pageTitle="Pergunta">
      <ActivityResearch />
    </Layout>
  );
};

export default Question;