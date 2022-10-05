import PropTypes from 'prop-types';
import { Item, Text, Number } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <Item>
        <Text>
          Good: <Number>{good}</Number>
        </Text>
      </Item>
      <Item>
        <Text>
          Neutral: <Number>{neutral}</Number>
        </Text>
      </Item>
      <Item>
        <Text>
          Bad: <Number>{bad}</Number>
        </Text>
      </Item>
      <Item>
        <Text>
          Total: <Number>{total}</Number>
        </Text>
      </Item>
      <Item>
        <Text>
          Positive feedback:
          <Number>{positivePercentage}</Number>
        </Text>
      </Item>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};