import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type WinResultProps = {
  setShow: (arg0:boolean) => void,
  itemVisible: string,
  isShow: boolean,
};

export const WinResult:FC<WinResultProps> = ({ setShow, itemVisible, isShow }) => {
  const winningList = useSelector((state:RootState) => state.winResult.winningList);

  return (
    <div className={isShow ? 'result-section show-section' : 'result-section'}>
      <button
        type="button"
        className="menu-button"
        onClick={() => setShow(false)}
      >
        <img src="./images/close.svg" alt="Menu Close" />
      </button>

      <ul className="winning-list">
        {
          winningList.map((item) => (
            <li
              key={item.id}
              className={
              itemVisible === item.indexStatus
                ? 'winning-action-container curr-total'
                : 'winning-action-container'
            }
            >
              <div className="button-container">
                <button
                  type="button"
                  className={item.isWin ? 'action winning-list-action ready-color' : 'action winning-list-action'}
                >
                  <span>{ item.result.currency }</span>

                  <span>{ item.result.total }</span>
                </button>
              </div>
            </li>
          )).reverse()
        }
      </ul>
    </div>
  );
};
