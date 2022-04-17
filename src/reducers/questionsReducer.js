import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'questions',
    initialState: [],
    reducers: {
        setQuestions: (state, action) => {
            return action.payload;
        },
        setAnswer: (state, action) => {
            const { answer, questionId } = action.payload;
            const question = state.find(q => q.id === questionId);
            question.answer = answer;
        }
    }
});

export const { setQuestions, setAnswer } = questionSlice.actions;
export default questionSlice.reducer;