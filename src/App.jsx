import React, { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const btnElements = Object.keys(feedback);

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = (values) => values.reduce((a, b) => (a += b));

  const countPositiveFeedbackPercentage = (good, totalFeedback) =>
    totalFeedback && Math.round((good / totalFeedback) * 100);

  const total = countTotalFeedback(Object.values(feedback));
  const positivePercentage = countPositiveFeedbackPercentage(
    feedback.good,
    total
  );

  return (
    <>
      
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={btnElements}
          handleFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
        
      </Section>
    </>
  );
};

export default App;