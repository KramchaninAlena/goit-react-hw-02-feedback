import React, { Component } from 'react'
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = (evt) => {
  const key = evt.target.name
  this.setState((prev) => {
    return {[key]: prev[key] + 1}
  })
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
      return good + neutral + bad
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return ((good / total) * 100);
  }
  render() {
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      
      <Section title="Statistics">
        {this.countTotalFeedback() ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
       : <Notification message="There is no feedback"/>}
        </Section>
    </>
    )
  }
}


