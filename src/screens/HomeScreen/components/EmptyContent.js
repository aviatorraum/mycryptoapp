import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import ViewBox from '~/components/ViewBox';
import Text from '~/components/Text';

const { height } = Dimensions.get('window');

const EmptyContent = () => {
  return (
    <ViewBox flex containerStyle={styles.containerStyle}>
      <Text h1 >Empty</Text>
    </ViewBox>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.5,
  },
});

export default EmptyContent;