import Button from "./Button";

const QuizPage = ({ quizData }) => {
    // const [chosenAnswer, setChosenAnswer] = useState(0)

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // const handleAnswerChange = (e) => {
    //     setChosenAnswer(e.target.value)
    // }

    const quizQuestions = quizData.map(response => {
        const unicodeQ = response.question
        const questions = unicodeQ.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, "&")

        const wrongAnswers = response.incorrect_answers
        wrongAnswers.push(response.correct_answer)

        const ToBeShuffled = [...new Set(wrongAnswers)]
        shuffle(ToBeShuffled)

        const answers = ToBeShuffled.map(answer => {
            const unicodeA = answer
            const fixedAnswer = unicodeA.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, "&")
            return (
                <Button 
                    singleButton={fixedAnswer}
                    // onClick={handleAnswerChange}
                />
            )
          })

        return (
            <div>
                <p>{questions}</p>
                <ul>{answers}</ul>
            </div>
        )
    })

    return (
        <div>
            {quizQuestions}
            <button className="quizzical-button">Check answers</button>
        </div>
    )
}

export default QuizPage