import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions'
import { Component } from 'react';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }
  
  btnElements = Object.keys(this.state);

  handleFeedback = (type) => {
      this.setState((prevState) => ({
        ...prevState,
        [type]: prevState[type] + 1,
      }));
  };
    
  countTotalFeedback = values => values.reduce((a, b) => (a += b));

  countPositiveFeedbackPercentage = (good, totalFeedback) =>
    totalFeedback && Math.round((good / totalFeedback) * 100);
  
  render() {
    const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback([good, neutral, bad]);
      const positivePercentage = this.countPositiveFeedbackPercentage(
        good,
        total
      );


    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.btnElements}
            handleFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>

      </>
      
    );
  }
  
};
