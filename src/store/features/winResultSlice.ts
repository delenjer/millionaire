import { createSlice } from '@reduxjs/toolkit';
import { WinResults } from '../../models/models';

interface WinResultState {
  winningList: WinResults[];
  summaryScore: string,
}

const initialState: WinResultState = {
  winningList: [],
  summaryScore: '0',
};

export const winResultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    addResultList: (state, action:{ payload: WinResults[], type: string }) => {
      state.winningList.push(...action.payload);
    },
    getWinResult: (state, action:{ payload: string, type: string }) => {
      state.winningList = state.winningList.map((item) => {
        if (item.indexStatus === action.payload) {
          state.summaryScore = item.result.total;

          return { ...item, isWin: true };
        }

        if (!action.payload) {
          return { ...item, isWin: false };
        }

        return item;
      });
    },
    getCurrWinId: (state, action:{ payload: string, type: string }) => {
      const summary = state.winningList.find((item) => item.indexStatus === action.payload);

      if (summary) {
        state.summaryScore = summary.result.total;
      }
    },
    resetSummary: (state, action:{ payload: string, type: string }) => {
      state.summaryScore = action.payload;
    },
  },
});

export const {
  addResultList,
  getWinResult,
  getCurrWinId,
  resetSummary,
} = winResultSlice.actions;

export default winResultSlice.reducer;
