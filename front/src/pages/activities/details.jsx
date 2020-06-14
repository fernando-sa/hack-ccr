import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../layouts/index';
import ActivityResearch from '../../components/ActivityResearch';
import ActivityRating from '../../components/ActivityRating';
import ActivityVideo from '../../components/ActivityVideo';

const Question = () => {
  const { id } = useParams();
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
        const { data } = await axios.get(`http://127.0.0.1:8000/api/activities/content/${id}`, config);
        setData(data);
        // console.log(data)
      } catch (error) {
        console.log(Object.keys(error), error.message)
      }
    }
    fetchData();
  }, []);
  return (
    <Layout pageTitle="Pergunta">
      <ActivityResearch questions={data}/>
    </Layout>
  );
};

export default Question;