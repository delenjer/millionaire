import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PagesRoutes } from '../../routers';
import data from '../../api/question.json';
import dataWinning from '../../api/winning.json';
import { addQuestions } from '../../store/features/questionsSlice';
import { RootState } from '../../store/store';
import { addResultList, resetSummary } from '../../store/features/winResultSlice';
import { StartContent } from './StartContent';
import { SummaryContent } from './SummaryContent';

export const StartGame = () => {
  const questions = useSelector((state:RootState) => state.questions.questions);
  const statusGame = useSelector((state:RootState) => state.statusGame.statusGame);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    if (!questions.length) {
      dispatch(addQuestions(data.questionsList));
      dispatch(addResultList(dataWinning.winning));
    }

    dispatch(resetSummary('0'));
  }, [questions.length, dispatch]);

  return (
    <div className="container">
      <div className="container-image">
        <img className="img" src="./images/great.svg" alt="Icon" />
      </div>

      <section className="container-content">
        {
          statusGame.endGame ? <SummaryContent /> : <StartContent />
        }

        <Link
          to={PagesRoutes.GameSpace}
          className="link-start-game"
          onClick={handleClick}
        >
          {statusGame.endGame ? 'Try again' : 'Start'}
        </Link>
      </section>
    </div>
  );
};
