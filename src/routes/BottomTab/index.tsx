import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, InfoStack} from '../Stack';
import {Text, Image} from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
        },
      }}>
      <Tab.Screen
        name="TabHome"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{
                width: 36,
                height: 36,
              }}
              source={{
                uri: 'https://img.icons8.com/pulsar-line/48/market.png',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text className={`${focused ? 'text-blue-500' : ''} font-semibold`}>
              Balık Fiyatları
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="TabInfo"
        component={InfoStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              style={{
                width: 36,
                height: 36,
              }}
              source={{
                uri: 'https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-Fish-spanish-culture-smashingstocks-glyph-smashing-stocks.png',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text className={`${focused ? 'text-blue-500' : ''} font-semibold`}>
              Balık Türleri
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
