import { connect } from 'react-redux';
import CoinDetailScreen from './view';
import { getCoinDetailsAction } from '~/actions/coinActions';

const mapStateToProps = ({ coinDetail }) => ({
  symbol: coinDetail.get('symbol'),
  name: coinDetail.get('name'),
  hashingAlgorithm: coinDetail.get('hashing_algorithm'),
  description: coinDetail.getIn(['description', 'en']),
  image: coinDetail.getIn(['image', 'small']),
  genesisDate: coinDetail.get('genesis_date'),
  marketCapRank: coinDetail.get('market_cap_rank'),
  coingeckoRank: coinDetail.get('coingecko_rank'),
  countryOrigin: coinDetail.get('country_origin'),
});

const mapDispatchToProps = dispatch => ({
  handleGetCoinDetail: payload => {
    dispatch(getCoinDetailsAction(payload))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetailScreen);