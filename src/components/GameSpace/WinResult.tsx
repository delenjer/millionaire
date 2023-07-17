import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MenuButton } from '../MenuButton';

type WinResultProps = {
  setShow: (arg0:boolean) => void,
  itemVisible: string,
  isShow: boolean,
};

export const WinResult:FC<WinResultProps> = ({ setShow, itemVisible, isShow }) => {
  const winningList = useSelector((state:RootState) => state.winResult.winningList);

  const handleMenuClick = () => {
    setShow(false);
  };

  return (
    <div className={isShow ? 'result-section show-section' : 'result-section'}>
      <MenuButton
        classNameProps="menu-button"
        handleClick={handleMenuClick}
      >
        <img src="./images/close.svg" alt="Menu Close" />
      </MenuButton>

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
