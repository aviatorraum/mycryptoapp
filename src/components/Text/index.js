import React from 'react';
import { StyleSheet } from 'react-native';
import { Text as BaseText } from 'react-native-elements';
import theme from '~/theme';

const getFontSize = (name) => ({
  fontSize: theme.fontSize[name]
})

const Text = props => {
  const {
    h5,
    h6,
    style,
    color = 'grey',
    fontWeight = 'normal',
    isVisible = true,
  } = props;
  const customPropsStyle = {
    color: theme.colors[color],
    fontWeight: theme.fontWeights[fontWeight],
    fontFamily: 'Avenir',
  };
  if (!isVisible) return null;

  return (
    <BaseText
      {...props}
      style={StyleSheet.flatten([
        customPropsStyle,
        style && style,
        h5 && getFontSize('h5'),
        h6 && getFontSize('h6'),
      ])}
    />
  );
};

export default Text;
