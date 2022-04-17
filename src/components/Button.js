import { useDispatch } from "react-redux";
import { setAnswer } from "../reducers/questionsReducer";

const Button = props => {
    const dispatch = useDispatch();

    return (
        <button className="quiz-question-answer" onClick={() => dispatch(setAnswer(props.answer, props.questionId))}>
            {props.answer}
        </button>
    );
}

export default Button 
