import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import colors from '~/theme/color';
import spacing from '~/theme/spacing';

const ViewBox = ({
  isVisible,
  children,
  flex,
  fill,
  containerStyle,
  ...props
}) => {
  if (!isVisible) return <Fragment />;

  const basicStyle = {
    flex: flex ? 1 : 0,
    alignItems: fill ? 'stretch' : 'center',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[styles.containerStyle, basicStyle, containerStyle]}
        {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
};

ViewBox.propTypes = {
  isVisible: propTypes.bool,
  flex: propTypes.bool,
  fill: propTypes.bool,
};

ViewBox.defaultProps = {
  isVisible: true,
  flex: false,
  fill: false,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: StatusBar.currentHeight,
  },
  containerStyle: {
    justifyContent: 'center',
  },
});

export default ViewBox;
