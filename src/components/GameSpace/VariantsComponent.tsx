import React, { FC, useState, useCallback } from 'react';
import { StatusAnswerDto, Variants } from '../../models/models';
import { VariantButton } from '../VariantButton/VariantButton';

type VariantsComponentProps = {
  variants: Variants[],
  handleClick: (arg0:string, arg1:boolean) => void,
  indexStatus: string,
};

export const VariantsComponent:FC<VariantsComponentProps> = (
  {
    variants,
    handleClick,
    indexStatus,
  },
) => {
  const [statusAnswer, setStatusAnswer] = useState<StatusAnswerDto>({
    id: '',
    statusClass: '',
  });

  const handleStatus = useCallback((status:boolean, id:string) => {
    if (status) {
      setStatusAnswer({
        id,
        statusClass: 'action-correct',
      });
    } else {
      setStatusAnswer({
        id,
        statusClass: 'action-wrong',
      });
    }
  }, []);

  return (
    <div className="variants">
      {
        variants.map((variant:Variants) => (
          <div
            key={variant.id}
            className={statusAnswer.id === variant.id
              ? `action-variants-container ${statusAnswer.statusClass}`
              : 'action-variants-container'}
          >
            <div className="button-container button-variants-container">
              <VariantButton
                indexStatus={indexStatus}
                variantStatus={variant.status}
                variantId={variant.id}
                statusAnswerId={statusAnswer.id}
                handleClick={handleClick}
                handleStatus={handleStatus}
              >
                <span className="action-variants-text">
                  { variant.index }
                </span>

                { variant.text }
              </VariantButton>
            </div>
          </div>
        ))
      }
    </div>
  );
};
