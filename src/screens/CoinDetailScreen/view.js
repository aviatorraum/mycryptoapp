import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Text from '~/components/Text';
import Image from '~/components/Image';
import ViewBox from '~/components/ViewBox';
import ScrollViewBox from '~/components/ScrollViewBox';
import LabelText from '~/components/LabelText';
import spacing from '~/theme/spacing';
import { useNavigation } from 'react-native-navigation-hooks'

const Rank = ({ title, content, containerStyle}) => 
  <View style={containerStyle}>
    <Text h5 fontWeight='medium' style={styles.centerText}>
      {title}
    </Text>
    <Text h4 fontWeight='medium' style={styles.centerText}>
      {content}
    </Text>
  </View>


const CoinDetailScreen = ({
  symbol,
  name,
  hashingAlgorithm,
  description,
  image,
  genesisDate,
  marketCapRank,
  coingeckoRank,
  countryOrigin,
  handleGetCoinDetail,
  passProps,
}) => {
  const { id } = passProps;
  const { mergeOptions } = useNavigation();

  mergeOptions({
    topBar: {
      title: {
        text: name,
      },
    },
    bottomTabs: {
      visible: false,
    },
  })

  useEffect(()=>{
    const payload = {
      id,
      localization: 'en',
      tickers: false,
      community_data: false,
      developer_data: false,
      sparkline: false,// default false
    };
    handleGetCoinDetail(payload);
  }, [id]);

  return (
    <ScrollViewBox style={styles.containerStyle}>
      <ViewBox>
        <Image uri={image} size={60} />
        <Text h3 style={styles.symbol}>{name}({symbol})</Text>
        <View style={styles.rankRow}>
          <Rank
            title='marketCapRank'
            content={marketCapRank}
            containerStyle={styles.marketCapRank}/>
          <Rank
            title='coingeckoRank'
            content={coingeckoRank}
            containerStyle={styles.coingeckoRank} />
        </View>
      </ViewBox>
      <LabelText label='Genesis Date' text={genesisDate} />
      <LabelText label='Country Origin' text={countryOrigin} />
      <LabelText label='Hashing Algorithm' text={hashingAlgorithm} />

      <Divider />
      <View style={styles.description}>
        <Text h6 numberOfLines={20}>{description}</Text>
      </View>
    </ScrollViewBox>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: spacing.middle,
  },
  rankRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    paddingVertical: spacing.small
  },
  marketCapRank: {
    width: '50%',
  },
  coingeckoRank: {
    width: '50%',
    paddingLeft: spacing.big,
  },
  centerText: {
    textAlign: 'center',
  },
  symbol: {
    textTransform: 'uppercase'
  },
  description: {
    paddingTop: spacing.middle,
  },
});

export default CoinDetailScreen;
