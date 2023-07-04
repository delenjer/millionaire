import React from 'react';
import { useSelector } from 'react-redux';
import { StartGame } from '../StartGame/StartGame';
import { RootState } from '../../store/store';

export const Home = () => {
  const statusGame = useSelector((state:RootState) => state.statusGame.statusGame);

  return (
    <div className="home">
      <div className={statusGame.endGame ? 'end-game home-bg-wrap' : 'home-bg-wrap'} />

      <StartGame />
    </div>
  );
};
