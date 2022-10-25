import React, { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, seTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodIncrenemt = () => {
    setGood(state => state + 1);
  };

  const handleNeutralIncrenemt = () => {
    setNeutral(state => state + 1);
  };

  const handBadIncrenemt = () => {
    setBad(state => state + 1);
  };

  useEffect(() => {
    const total = good + neutral + bad;
    seTotal(total);
    const positive = Math.round((good * 100) / total);
    console.log(positive);
    setPositive(positive);
  }, [good, neutral, bad]);

  function onShow() {
    if (good === 0 && neutral === 0 && bad === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleGoodIncrenemt={handleGoodIncrenemt}
          handleNeutralIncrenemt={handleNeutralIncrenemt}
          handBadIncrenemt={handBadIncrenemt}
        />
      </Section>

      <Section title="Statistics">
        {onShow() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        )}
      </Section>
    </>
  );
}

export default App;
