import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import InfoScreen from '../../screens/Info';
import Modal from '../../screens/Modal';
import {Button} from 'react-native';
import useAppNavigation from '../../hooks/useAppNavigation';

const Stack = createStackNavigator();

const HomeStack = () => {
  const navigation = useAppNavigation();
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          presentation: 'modal',
          headerLeft: () => (
            <Button title="Kapat" onPress={() => navigation.goBack()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const InfoStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Info'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Info"
        component={InfoScreen}
      />
    </Stack.Navigator>
  );
};

export {HomeStack, InfoStack};
