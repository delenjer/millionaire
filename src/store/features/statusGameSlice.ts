import { createSlice } from '@reduxjs/toolkit';

interface StatusGameState {
  statusGame: {
    endGame: boolean,
  }
}

const initialState: StatusGameState = {
  statusGame: {
    endGame: false,
  },
};

export const statusGameSlice = createSlice({
  name: 'status-game',
  initialState,
  reducers: {
    getStatusGame: (state, action:{ payload: boolean, type: string }) => {
      state.statusGame.endGame = action.payload;
    },
  },
});

export const { getStatusGame } = statusGameSlice.actions;

export default statusGameSlice.reducer;
