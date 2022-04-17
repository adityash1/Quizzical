import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: false,
    reducers: {
        setQuiz: (state, action) => {
            return action.payload;
        }
    }
});

export const { setQuiz } = quizSlice.actions;
export default quizSlice.reducer;