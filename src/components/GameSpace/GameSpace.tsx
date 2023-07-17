import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { Question } from '../../models/models';
import { VariantsComponent } from './VariantsComponent';
import { WinResult } from './WinResult';
import { getCurrWinId, getWinResult } from '../../store/features/winResultSlice';
import { getStatusGame } from '../../store/features/statusGameSlice';
import { MenuButton } from '../MenuButton';

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

  const handleClick = useCallback((id:string, status:boolean) => {
    if (status) {
      setTimeout(() => setItemVisibleVisible(id), 1000);
      dispatch(getWinResult(itemVisible));
      dispatch(getCurrWinId(id));
    } else {
      dispatch(getStatusGame(true));
      dispatch(getWinResult(''));

      setTimeout(() => navigate('/'), 1000);
    }
  }, [dispatch, itemVisible, navigate]);

  const handleMenuClick = () => {
    setShow(true);
  };

  return (
    <div className="game-section">
      <div className="questions-section">
        <MenuButton
          classNameProps="menu-button"
          handleClick={handleMenuClick}
        >
          <img src="./images/menu.svg" alt="Menu" />
        </MenuButton>

        {
          questions && questions.map((question:Question) => (
            <div
              className={
              itemVisible === question.id ? 'show questions-item' : 'hide'
            }
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
