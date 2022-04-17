import axios from "axios";

const url = 'https://opentdb.com/api.php?amount=5&type=multiple'

const getQuestions = async () => {
    const response = await axios.get(url)
    return response.data.results
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getQuestions }
