import { useState, useEffect } from 'react';
import axios from 'axios';

import StartPage from "./components/StartPage"
import QuizPage from "./components/QuizPage"

const App = () => {
  const [quiz, setQuiz] = useState(false);
  const [quizData, setQuizData] = useState([])

  useEffect(() => {
    if (quiz) {
    axios.get('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => {
        setQuizData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }}, [quiz]);

  const startQuiz = () => {
    setQuiz(true);
  }

  return (
    <div>
      <div className="yellow-blob"></div>
      <div className="blue-blob"></div>
      {!quiz && <StartPage onClick={startQuiz}/>}
      {quiz && <QuizPage quizData={quizData}/>}
    </div>
  );
}

export default App;
