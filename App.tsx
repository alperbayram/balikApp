/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Router} from './src/routes';
import {AnimatedBootSplash} from './src/screens/SplashScreen';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.view]}>
      <Provider store={store}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Router />
      </Provider>
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(!visible);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  view: {
    flex: 1,
  },
});

export default App;
