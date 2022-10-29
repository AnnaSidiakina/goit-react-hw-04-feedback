import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Value, Name } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <Container>
        <Item>
          <Name>Good</Name>
          <Value>{good}</Value>
        </Item>
        <Item>
          <Name>Neutral</Name>
          <Value>{neutral}</Value>
        </Item>
        <Item>
          <Name></Name>
          Bad <Value>{bad}</Value>
        </Item>
        <Item>
          <Name>Total</Name>
          <Value>{total()}</Value>
        </Item>
        <Item>
          <Name>Positive feedback </Name>
          <Value>{positive()}%</Value>
        </Item>
      </Container>
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positive: PropTypes.func.isRequired,
};
