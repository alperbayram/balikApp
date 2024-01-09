import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import PriceseScreen from '../../screens/Pricese';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={'Home'}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
};

const PriceStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={'Pricese'}
        >
        <Stack.Screen name="Pricese" component={PriceseScreen} />
      </Stack.Navigator>
  );
};

export {HomeStack, PriceStack};
