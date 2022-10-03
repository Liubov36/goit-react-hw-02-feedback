import { Component } from 'react';
import { Chapter } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Box } from './Box';
import { Container, Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = e => {
    const option = e.target.name;

    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.trunc((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedback();
    const options = Object.keys(this.state);
    const handleClickButton = this.handleClickButton;

    return (
      <Box m="0, auto" p="20px" as="main">
        <Container>
          <Wrapper>
            <Chapter title="Please leave feedback">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={handleClickButton}
              />
            </Chapter>

            <Chapter title="Statistics">
              {countTotalFeedback > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={countTotalFeedback}
                  positivePercentage={countPositiveFeedbackPercentage}
                />
              ) : (
                <Notification message="There is no feedback" />
              )}
            </Chapter>
          </Wrapper>
        </Container>
      </Box>
    );
  }
};
