import { configureStore } from '@reduxjs/toolkit';
import questions from './features/questionsSlice';
import winResult from './features/winResultSlice';
import statusGame from './features/statusGameSlice';

export const store = configureStore({
  reducer: {
    questions,
    winResult,
    statusGame,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
