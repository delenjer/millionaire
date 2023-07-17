import React, { FC } from 'react';

type MenuButtonProps = {
  children: React.ReactNode,
  handleClick: () => void,
  classNameProps: string,
};

export const MenuButton:FC<MenuButtonProps> = ({
  children,
  handleClick,
  classNameProps,
}) => (
  <button
    type="button"
    className={classNameProps}
    onClick={handleClick}
  >
    { children }
  </button>
);
