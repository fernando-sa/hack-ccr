import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URI_API, URI_CONFIG } from '../../variables';
import Layout from '../../layouts/index';
import Modal from '../../components/Modal';
import styles from '../../styles/Question.module.sass';

const Question = (props) => {
  const { id } = useParams();
  const [questions, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const handleChange = (event) => {
    if(question.type === 'checkbox') {
      const newAnswer = answer + event.target.value + ',';
      setAnswer(newAnswer);
    } else{
      setAnswer(event.target.value);
    }
  };
  async function sendAnswer()  {
    try {
      await axios.post(URI_API + '/activities/answer', {
        activityId: id,
        contentId: question.id,
        answer: answer
      }, URI_CONFIG)
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
    if(currentIndex + 1 < total) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setOpenModal(true);
    }
  };
  useEffect(() => {
    async function fetchData(){
      try {
        const { data } = await axios.get(URI_API + '/activities/content/' + id, URI_CONFIG);
        const treatedData = data.map((question)=>{
          question.possibilities = question.possibilities.split(',');
          return question;
        })
        setData(treatedData);
        setTotal(treatedData.length);
        setQuestion(treatedData[currentIndex])
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    setQuestion(questions[currentIndex])
  }, [currentIndex])
  return (
    <Layout pageTitle="Pergunta">
      <div className={styles.research}>
        {question && (
          <>
            <header className={styles.track}>
              <span className={styles.progress} style={{ width: `${(100 / total) * (currentIndex + 1)}%` }} />
              {currentIndex + 1} de {total} perguntas
            </header>
            <div className={styles.questionBlock}>
              <h1 className={styles.title}>Intraestrutura</h1>
              <p className={styles.question}>{question.description}</p>
              {question.type === 'radio' || question.type === 'checkbox' ? (
                <ul className={styles.options}>
                  {question.possibilities.map((option, key) => (
                    <li key={key}>
                      <label htmlFor={`op0${key}`} className={styles.label}>
                        <input type={question.type} name="option" id={`op0${key}`} value={option} onChange={handleChange} />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                <textarea className={styles.textarea} name="text" id="text" cols="30" rows="10"></textarea>
              )}
            </div>
            <footer className={styles.footer}>
              <button
                type="button"
                className={styles.btnSendAnswer}
                onClick={() => sendAnswer()}
              >
                Responder
              </button>
            </footer>
          </>
        )}
        <Modal title="Respostas enviadas" openModal={openModal} actionOnClose={() => props.history.push('/')}>
          <p>Obrigada por responder á pesquisa! Seus pontos serão creditados na conta!</p>
        </Modal>
      </div>
    </Layout>
  );
};

export default Question;