import { useSelector } from "react-redux";

import Button from "./Button";

const QuizPage = () => {
    const quizData = useSelector(state => state.questions);

    const quizQuestions = quizData.map(question => {
        return (
            <div className="quiz-question" key={question.id}>
                <h2 className="quiz-question-header">{question.question}</h2>
                <div className="quiz-question-answers">
                    {question.incorrect_answers.map(answer => {
                        return (
                            <Button
                                key={answer.id}
                                answer={answer}
                                questionId={question.id}
                            />
                        );
                    })}
                </div>
            </div>
        );
    });

    return (
        <div className="quiz-page">{quizQuestions}</div>
    )
}

export default QuizPage