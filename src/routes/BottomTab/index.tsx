import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, InfoStack} from '../Stack';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabHome"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="fish-outline" color={color} size={size} />
          ),
          tabBarLabel: () => <Text>Balık Fiyatları</Text>,
        }}
      />
      <Tab.Screen
        name="TabInfo"
        component={InfoStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="fish" color={color} size={size} />
          ),
          tabBarLabel: () => <Text>Balık Bilgileri</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
