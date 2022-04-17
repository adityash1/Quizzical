import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import StartPage from "./components/StartPage"
import QuizPage from "./components/QuizPage"

import questionsService from './services/questions'

import { setQuestions } from './reducers/questionsReducer'

const App = () => {
  const quiz = useSelector(state => state.quiz)
  const dispatch = useDispatch()

  useEffect(() => {
    if (quiz) {
      questionsService.getQuestions().then(questions => {
        dispatch(setQuestions(questions))
      })
    }
  }, [dispatch, quiz]);

  return (
    <div>
      <div className="yellow-blob"></div>
      <div className="blue-blob"></div>
      {quiz ? <QuizPage /> : <StartPage />}
    </div>
  );
}

export default App;
