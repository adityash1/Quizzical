import { configureStore } from '@reduxjs/toolkit'

import questionsReducer from './reducers/questionsReducer'
import quizReducer from './reducers/quizReducer'

const store = configureStore({
    reducer: {
        'questions': questionsReducer,
        'quiz': quizReducer
    }
})

export default store