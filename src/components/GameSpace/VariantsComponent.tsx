import React, { FC, useState } from 'react';
import { statusAnswerDto, Variants } from '../../models/models';

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
  const [statusAnswer, setStatusAnswer] = useState<statusAnswerDto>({
    id: '',
    statusClass: '',
  });

  const handleStatus = (status:boolean, id:string) => {
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
  };

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
              <button
                type="button"
                onClick={() => {
                  handleClick(indexStatus, variant.status);
                  handleStatus(variant.status, variant.id);
                }}
                className="action action-variants"
              >
                <span className="action-variants-text">
                  { variant.index }
                </span>

                { variant.text }
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};
