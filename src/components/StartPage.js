import { useDispatch } from 'react-redux'
import { setQuiz } from '../reducers/quizReducer'

const StartPage = (props) => {
  const dispatch = useDispatch()

  const startQuiz = () => {
    dispatch(setQuiz(true))
  }

  return (
    <div className="start-page">
      <h1 className="start-page-title">Quizzical</h1>
      <p className="start-page-description">Take this Challenge! Give answer to 5 random questions. 😉</p>
      <button className="start-page-button" onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartPage;