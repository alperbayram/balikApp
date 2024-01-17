import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import InfoScreen from '../../screens/Info';
import Modal from '../../screens/Modal';
import {Button} from 'react-native';
import useAppNavigation from '../../hooks/useAppNavigation';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const InfoStack = () => {
  const navigation = useAppNavigation();
  return (
    <Stack.Navigator initialRouteName={'Info'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Info"
        component={InfoScreen}
      />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          presentation: 'modal',
          title: 'Balık Türü',
          headerTitleStyle:{
            fontSize:20
          },
          headerLeft: () => (
            <Button title="Kapat" onPress={() => navigation.navigate('Info')} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {HomeStack, InfoStack};
