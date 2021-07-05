
import Feather from 'react-native-vector-icons/Feather';
import { Navigation } from 'react-native-navigation';
import colors from '~/theme/color';
import { stack } from './stack';

const rootNavigator = () => {
  Promise.all([
    Feather.getImageSource('globe', 25),
  ]).then(([homeIcon]) => {
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
                  visible: false,
                },
              },
              children: [
                stack('Home', 'Home', homeIcon),
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