import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTab';
import BootSplash from 'react-native-bootsplash';
import {useState} from 'react';
import {AnimatedBootSplash} from '../screens/SplashScreen';

const Stack = createStackNavigator();

export const Router = () => {
  const [visible, setVisible] = useState(true);
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}>
        <Stack.Screen
          name="App"
          component={BottomTabs}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
