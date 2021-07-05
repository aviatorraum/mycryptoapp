import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ViewBox from '~/components/ViewBox';
import Button from '~/components/Button';
import spacing from '~/theme/spacing';
import colors from '~/theme/color';
import ScrollViewBox from '~/components/ScrollViewBox';;

const ButtonList = [
  {
    id: 'market_cap_desc',
    title: 'Market Cap',
  },
  {
    id: 'gecko_desc',
    title: 'Gecko Volume',

  },
  {
    id: 'volume_desc',
    title: 'Total Volume',
  },
];

const OrderButton = ({ isActive, title, onPress }) => (
  <Button
    type={isActive ? 'solid' : 'outline'}
    title={title}
    style={styles.button}
    color={colors.secondary}
    onPress={onPress}
  />
);

const OrderBox = ({
  onPressOrderBtn,
  ...props
}) => {
  const [active, setActive] = useState('market_cap_desc');

  const onPress = (value) => () => {
    setActive(value);
    onPressOrderBtn(value);
  };
  const getActiveStatus = (value) => active === value;
  return (
    <ViewBox containerStyle={styles.containerStyle}>
      <ScrollViewBox horizontal style={styles.rowBox}>
        { ButtonList.map(item => {
          const isActive = getActiveStatus(item.id);
          return (
            <OrderButton
              {...item}
              key={`${item.id}`}
              isActive={isActive}
              onPress={onPress(item.id)}
            />
          );
        })}
      </ScrollViewBox>
    </ViewBox>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: spacing.middle,
  },
  rowBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    paddingRight: spacing.small,
  },
});

export default OrderBox;