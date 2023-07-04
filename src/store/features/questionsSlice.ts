import { createSlice } from '@reduxjs/toolkit';
import { Question } from '../../models/models';

interface QuestionsState {
  questions: Question[];
}

const initialState: QuestionsState = {
  questions: [],
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestions: (state, action:{ payload: Question[], type: string }) => {
      state.questions.push(...action.payload);
    },
  },
});

export const { addQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
