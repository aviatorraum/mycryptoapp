import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Text from '~/components/Text';
import Image from '~/components/Image';
import colors from '~/theme/color';
import spacing from '~/theme/spacing';
import { priceFormat, numberFormat } from '~/utils/format';
import preventDoubleClickHOC from '~/utils/preventDoubleClickHOC';

const CoinCard = ({ index, item, onPress }) => {
  return (
    <ListItem
      isVisible
      bottomDivider
      onPress={onPress}
      pad={spacing.middle}
      activeOpacity={0.85}
      underlayColor={colors.primary}
      containerStyle={styles.container}>
      <Image uri={item.get('image')} size={30} />
      <ListItem.Content>
        <View style={styles.rowStyle}>
          <View style={styles.leftBox}>
            <Text h5 >{index+1}</Text>
            <Text h4 style={styles.symbolStyle}>{item.get('symbol')}</Text>
          </View>
          <View style={styles.rightBox}>
            <Text h5 fontWeight='bold' style={styles.price}>{priceFormat(item.get('current_price'))}</Text>
          </View> 
        </View>
        <Text>Market Cap: {numberFormat(item.get('market_cap'))}</Text>
      </ListItem.Content>
      <ListItem.Chevron color={colors.greyLight} />
    </ListItem>
  );
};

export default preventDoubleClickHOC(CoinCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: spacing.middle,
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightBox: {
    flex: 1,
  },
  price: {
    // marginLeft: 'auto',
    textAlign: 'right',
  },
  symbolStyle: {
    paddingLeft: spacing.small,
    textTransform: 'uppercase'
  },
});
