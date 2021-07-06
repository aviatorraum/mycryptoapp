import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ViewBox from '~/components/ViewBox';
import { firstUppercaseFormat } from '~/utils/format';
import LabelText from './components/LabelText';
import '../../../shim';
import Web3 from 'web3';
import spacing from '~/theme/spacing';

const TESTNET = 'ropsten';
const PROJECT_ID = '273486bc79d547c9af0bee023712b6cc';
const INFYRA_URL = `https://${TESTNET}.infura.io/v3/${PROJECT_ID}`;
const DEFAULT_ADDRESS = '0x407d73d8a49eeb85d32cf465507dd71d507100c1';

const WalletScreen = (props) => {
  const [balance, setBalance] = useState(0);
  const [block, setBlock] = useState(0);
  const [nodeInfo, setNodeInfo] = useState('');

  const web3 = new Web3(
    new Web3.providers.HttpProvider(INFYRA_URL)
  );

  useEffect(() => {
    web3.eth.getBalance(DEFAULT_ADDRESS).then(setBalance);
    web3.eth.getBlockNumber().then(setBlock);
    web3.eth.getNodeInfo().then(setNodeInfo);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  const toEth = (wei) => {
    const newWei = wei.toString();
    return web3.utils.fromWei(newWei, "ether")
  };

  return (
    <ViewBox containerStyle={styles.container}>
      <LabelText label='Network' text={firstUppercaseFormat(TESTNET)} />
      <LabelText label='Address' text={DEFAULT_ADDRESS} />
      <LabelText label='Balance' texts={[`${balance} Wei`, `${toEth(balance)} ETH`]} />
      <LabelText label='Current Block' text={block.toString()} />
      <LabelText label='Node Infomation' text={nodeInfo} />
    </ViewBox>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.middle,
    justifyContent: 'space-around',
  },
});

export default WalletScreen;
