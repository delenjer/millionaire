import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const SummaryContent = () => {
  const summary = useSelector((state:RootState) => state.winResult.summaryScore);

  return (
    <>
      <p className="score">
        Total score:
      </p>

      <p className="info-text">
        { summary }
        {' '}
        earned
      </p>
    </>
  );
};
