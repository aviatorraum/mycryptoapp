import React, { useEffect, useState } from 'react';
import { VirtualizedList, StyleSheet } from 'react-native';
import { useNavigation } from 'react-native-navigation-hooks'
import ViewBox from '~/components/ViewBox';
import CoinCard from './components/CoinCard';
import OrderBox from './components/OrderBox';
import EmptyContent from './components/EmptyContent';

const DEFAULT_PAYLOAD = {
  page: 1,
  per_page: 25,
  vs_currency: 'usd',
  sparkline: false,
  order: 'market_cap_desc',
};

const NAVIGATION_OPTIONS = {
  topBar: {
    title: {
      text: 'Crypto Market',
    },
    backButton: {
      showTitle: false,
    },
  },
  bottomTab: {
    text: 'Market'
  }
};

const handleOnchange = setPayload => (name, value) => {
  setPayload(p => ({ ...p, [name]: value }));
};

// const handleOnRefresh = handleGetCoins => () => {
//   handleGetCoins(DEFAULT_PAYLOAD);
// };

const handleNextPage = (handleGetMore, payload, page) => () => {
  handleGetMore({ ...payload, page });
};

const HomeScreen = ({
  list,
  page,
  handleGetCoins,
  handleGetMore,
  ...props
}) => {
  const [payload, setPayload] = useState(DEFAULT_PAYLOAD);
  const { push, mergeOptions } = useNavigation();

  mergeOptions(NAVIGATION_OPTIONS);

  useEffect(()=>{
    handleGetCoins(payload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = handleOnchange(setPayload);
  // const onRefesh = handleOnRefresh(handleGetCoins);
  const getNextPage = handleNextPage(handleGetMore, payload, page);

  const onPressOrderBtn = (value) => {
    onChange('order', value);
    handleGetCoins({ ...payload, order: value});
  };

  return (
    <ViewBox flex fill>
    <VirtualizedList
      ListHeaderComponent={<OrderBox onPressOrderBtn={onPressOrderBtn} />}
      keyExtractor={(item, index) => `${index}`}
      data={list}
      renderItem={({ item, index }) => {
        return (
          <CoinCard
            index={index}
            item={item}
            onPress={()=> push(
              'CoinDetail',
              { passProps: { id: item.get('id') }},
            )}
        />
        );
      }}
      getItemCount={items => (items && items.size) || 0}
      getItem={(items, index) => items.get(index)}
      ListEmptyComponent={<EmptyContent />}
      onEndReached={getNextPage}
      onEndReachedThreshold={0.2}
    />
  </ViewBox>
  );

}

const styles = StyleSheet.create({
  //
});

export default HomeScreen;
