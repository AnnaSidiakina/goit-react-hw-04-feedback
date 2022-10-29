import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({
  options,
  onLeaveFeedback,

}) => {
  return (
    <Container>
      {Object.keys(options).map(button => (
          <Button
            key={button}
            value={button}
            type="button"
            onClick={onLeaveFeedback}
          >
            {button}
          </Button>))}
    </Container>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
