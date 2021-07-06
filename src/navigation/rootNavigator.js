
import Feather from 'react-native-vector-icons/Feather';
import { Navigation } from 'react-native-navigation';
import colors from '~/theme/color';
import { stack } from './stack';

const rootNavigator = () => {
  Promise.all([
    Feather.getImageSource('globe', 25),
    Feather.getImageSource('credit-card', 25),
  ]).then(([homeIcon, walletIcon]) => {
    Navigation.setDefaultOptions({
      statusBar: {
        backgroundColor: colors.primary,
      },
      topBar: {
        title: {
          color: 'white'
        },
        backButton: {
          color: 'white',
          showTitle: false,
        },
        background: {
          color: colors.primary,
        }
      },
      bottomTab: {
        fontSize: 14,
        selectedFontSize: 18,
        selectedIconColor: colors.primary,
        selectedTextColor: colors.primary,
      }
    });
    
    Navigation.setRoot({
      root: {
        sideMenu: {
          center: {
            bottomTabs: {
              options: {
                bottomTabs: {
                  titleDisplayMode: 'alwaysShow',
                },
              },
              children: [
                stack('Home', 'Home', homeIcon),
                stack('Wallet', 'Wallet', walletIcon),
              ]
            },
          },
          options: {
            bottomTab: {
              text: 'SideMenu',
              testID: 'SIDE_MENU_TAB'
            }
          }
        },
      }
    });
  });
};

export default rootNavigator;