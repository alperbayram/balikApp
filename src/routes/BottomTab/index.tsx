import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, PriceStack} from '../Stack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={HomeStack} />
      <Tab.Screen name="TabPricese" component={PriceStack} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
