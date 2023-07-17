import React, { FC } from 'react';

type VariantButtonProps = {
  children: React.ReactNode,
  indexStatus: string,
  variantStatus: boolean,
  variantId: string,
  statusAnswerId: string,
  handleClick: (indexStatus: string, variantStatus: boolean) => void,
  handleStatus: (variantStatus: boolean, variantId: string) => void,
};

export const VariantButton:FC<VariantButtonProps> = ({
  children,
  indexStatus,
  variantStatus,
  variantId,
  statusAnswerId,
  handleClick,
  handleStatus,
}) => (
  <button
    type="button"
    onClick={() => {
      handleClick(indexStatus, variantStatus);
      handleStatus(variantStatus, variantId);
    }}
    className="action action-variants"
    disabled={statusAnswerId !== '' && statusAnswerId !== variantId}
  >
    {children}
  </button>
);
