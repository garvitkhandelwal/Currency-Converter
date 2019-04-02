import React , { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode='contain' style={styles.icon} source={require('./images/icon.png')} />
      <Text style={styles.text}> {text} </Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes={
  text: PropTypes.string,
  onPress: PropTypes.func,
};
