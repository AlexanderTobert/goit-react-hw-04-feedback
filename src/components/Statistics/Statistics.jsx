import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const textElements = ['Good', 'Neutral', 'Bad', 'Total', 'Positive feedback'];
  const values = [good, neutral, bad, total, positivePercentage];

  return (
    <div>
      {textElements.map((item, index) => (
        <p key={item} className={css.item}>
          {item}:{' '}
          <span
            style={{
              color: index === 4 && positivePercentage >= 75 ? 'green' : 'black',
            }}
          >
            {index !== 4 ? values[index] : values[index] + '%'}
          </span>
          ;
        </p>
      ))}
    </div>
  );
};

export { Statistics };