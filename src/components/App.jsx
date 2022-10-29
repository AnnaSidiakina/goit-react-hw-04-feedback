import { useState} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = e => {
    const button = e.currentTarget.value;
    switch(button) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

        case 'neutral': 
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

        case 'bad':
          setBad(prevBad => prevBad + 1);
          break;

          default: return;
    }
  };

    const total = () => { return good + neutral + bad;}; 
    const positive = () => {return Math.round((good * 100) / total());} 
  

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
          
        />
      </Section>

      <Section title="Statistics">
        {total() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
