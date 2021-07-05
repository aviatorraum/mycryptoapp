import React from 'react';
import propTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import ViewBox from '~/components/ViewBox';
import colors from '~/theme/color';
import spacing from '~/theme/spacing';

const ScrollViewBox = ({ horizontal, ...props }) => {
  return (
    <ScrollView
      horizontal={horizontal}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <ViewBox {...props} />
    </ScrollView>
  );
};

ViewBox.propTypes = {
  horizontal: propTypes.bool,
};

ScrollViewBox.defaultProps = {
  horizontal: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.middle,
  },
});

export default ScrollViewBox;
