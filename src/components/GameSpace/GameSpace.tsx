import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { Question } from '../../models/models';
import { VariantsComponent } from './VariantsComponent';
import { WinResult } from './WinResult';
import { getCurrWinId, getWinResult } from '../../store/features/winResultSlice';
import { getStatusGame } from '../../store/features/statusGameSlice';

export const GameSpace = () => {
  const [isShow, setShow] = useState(false);
  const [itemVisible, setItemVisibleVisible] = useState<string>('1');
  const questions = useSelector((state:RootState) => state.questions.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!questions.length || questions.length < +itemVisible) {
      dispatch(getStatusGame(true));
      navigate('/');
    }
  }, [navigate, questions, itemVisible, dispatch]);

  const handleClick = (id:string, status:boolean) => {
    if (status) {
      setTimeout(() => setItemVisibleVisible(id), 1000);
      dispatch(getWinResult(itemVisible));
      dispatch(getCurrWinId(id));
    } else {
      dispatch(getStatusGame(true));
      dispatch(getWinResult(''));

      setTimeout(() => navigate('/'), 1000);
    }
  };

  return (
    <div className="game-section">
      <div className="questions-section">
        <button
          type="button"
          className="menu-button"
          onClick={() => setShow(true)}
        >
          <img src="./images/menu.svg" alt="Menu" />
        </button>

        {
          questions && questions.map((question:Question) => (
            <div
              className={itemVisible === question.id ? 'show questions-item' : 'hide'}
              key={question.id}
            >
              <p className="question-text">{ question.title }</p>

              <VariantsComponent
                variants={question.variants}
                handleClick={handleClick}
                indexStatus={question.indexStatus}
              />
            </div>
          ))
        }
      </div>

      <WinResult
        itemVisible={itemVisible}
        setShow={setShow}
        isShow={isShow}
      />
    </div>
  );
};
