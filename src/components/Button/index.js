import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as BaseButton } from 'react-native-elements';
import propTypes from 'prop-types';
import colors from '~/theme/color';
class Button extends React.PureComponent {
  static propTypes = {
    onPress: propTypes.func.isRequired,
    ...Button.propTypes,
  };

  static defaultProps = {
    isVisible: true,
    type: 'solid',
  };

  render() {
    const { isVisible, onPress, type, ...props } = this.props;
    if (!isVisible) return null;
    const styles = getStyles(type);

    return (
      <BaseButton
        {...props}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        onPress={onPress}
        type={type}
      />
    );
  }
}

export default Button;

const getStyles = type => StyleSheet.create({
    buttonStyle: {
      backgroundColor: type === 'solid' ? colors.secondary : colors.transparent,
      borderColor: type === 'outline' ? colors.primary : colors.secondary,
      borderWidth: 1,
      borderRadius: 25, 
    },
    titleStyle: {
      color: type === 'solid' ? colors.white : colors.primary,
    },
});
