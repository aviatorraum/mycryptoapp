import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import HomeScreen from '~/screens/HomeScreen';
import CoinDetailScreen from '~/screens/CoinDetailScreen';
import App from '~/App';
import rootNavigator from './rootNavigator';

const Screens = new Map();

Screens.set('Home', HomeScreen);
Screens.set('CoinDetail', CoinDetailScreen);

Screens.forEach((C, key) => {
  return Navigation.registerComponent(
    key,
    () => gestureHandlerRootHOC(App(C)),
    () => C
  )
});

export const startMain = () => {
  rootNavigator();
};