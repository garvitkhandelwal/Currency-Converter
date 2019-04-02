import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import styles from './styles';

export const LastConverted = ({base, conversionRate, quote, conversionDate}) => (
  <Text style={styles.smallText}> 1 {base} = {conversionRate} {quote} as of {moment(conversionDate).format('D MMMM, YYYY')} </Text>
);

LastConverted.propTypes={
  conversionRate: PropTypes.number,
  conversionDate: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
};
