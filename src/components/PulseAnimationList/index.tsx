import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, StyleSheet, ScrollView} from 'react-native';

const PulseAnimationList: React.FC = () => {
  const animatedValues: Animated.Value[] = [];

  // Initialize animated values
  for (let i = 0; i < 8; i++) {
    animatedValues[i] = useRef(new Animated.Value(1)).current;
  }

  const startAnimation = (index: number) => {
    animatedValues[index].setValue(1);
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValues[index], {
          toValue: 0.5,
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.6, 1),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValues[index], {
          toValue: 1,
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.6, 1),
          useNativeDriver: true,
        }),
      ]),
      {iterations: -1},
    ).start();
  };

  useEffect(() => {
    // Start animation for each box
    for (let i = 0; i < 8; i++) {
      startAnimation(i);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {animatedValues.slice(0, 10).map((animatedValue, index) => (
          <Animated.View
            key={index}
            style={[
              styles.box,
              {
                opacity: animatedValue,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    backgroundColor: 'white',
    marginTop: 20,
  },
  row: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  box: {
    width: '100%',
    height: 60,
    marginBottom:20,
    backgroundColor: '#cbd5e1',
  },
});

export default PulseAnimationList;
