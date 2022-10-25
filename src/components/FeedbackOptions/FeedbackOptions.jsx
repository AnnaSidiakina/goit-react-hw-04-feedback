import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({
  handleGoodIncrenemt,
  handleNeutralIncrenemt,
  handBadIncrenemt,
}) => {
  return (
    <Container>
      <Button type="button" onClick={handleGoodIncrenemt}>
        good
      </Button>
      <Button type="button" onClick={handleNeutralIncrenemt}>
        neutral
      </Button>
      <Button type="button" onClick={handBadIncrenemt}>
        bad
      </Button>
    </Container>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  handleGoodIncrenemt: PropTypes.func.isRequired,
  handleNeutralIncrenemt: PropTypes.func.isRequired,
  handBadIncrenemt: PropTypes.func.isRequired,
};
