import React from 'react';
import { StyleSheet, View } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import Text from '~/components/Text';
import spacing from '~/theme/spacing';

const LabelText = ({ label, text }) => {
  const formatText = isEmpty(text) ? '-' : text
  return (
    <View style={styles.labelContainer} >
      <Text h6 fontWeight='bold' >{label}: </Text>
      <Text h6 >{formatText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: spacing.small,
  },
});

export default LabelText;