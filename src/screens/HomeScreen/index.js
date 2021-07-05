import { connect } from 'react-redux';
import Home from './view';
import { getCoinsAction, getMoreCoinsAction } from '~/actions/coinActions';

const mapStateToProps = ({ coin }) => ({
  list: coin.get('list'),
  page: coin.get('page'),
});

const mapDispatchToProps = dispatch => ({
  handleGetCoins: payload => {
    dispatch(getCoinsAction(payload));
  },
  handleGetMore: payload => {
    dispatch(getMoreCoinsAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);