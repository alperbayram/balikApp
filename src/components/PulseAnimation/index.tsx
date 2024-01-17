import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, StyleSheet, Platform} from 'react-native';

const PulseAnimation: React.FC = () => {
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
    <View
      style={
        Platform.OS === 'android' ? styles.containerandroid : styles.container
      }>
      <View style={styles.row}>
        {animatedValues.slice(0, 2).map((animatedValue, index) => (
          <Animated.View
            key={index}
            style={[
              styles.box,
              index % 2 === 0
                ? {
                    marginRight: 0,
                  }
                : {
                    marginLeft: 20,
                  },
              {
                opacity: animatedValue,
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.row}>
        {animatedValues.slice(2, 4).map((animatedValue, index) => (
          <Animated.View
            key={index + 2}
            style={[
              styles.box,
              index % 2 === 0
                ? {
                    marginRight: 0,
                  }
                : {
                    marginLeft: 20,
                  },
              {
                opacity: animatedValue,
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.row}>
        {animatedValues.slice(4, 6).map((animatedValue, index) => (
          <Animated.View
            key={index + 4}
            style={[
              styles.box,
              index % 2 === 0
                ? {
                    marginRight: 0,
                  }
                : {
                    marginLeft: 20,
                  },
              {
                opacity: animatedValue,
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.row}>
        {animatedValues.slice(6, 8).map((animatedValue, index) => (
          <Animated.View
            key={index + 6}
            style={[
              styles.box,
              index % 2 === 0
                ? {
                    marginRight: 0,
                  }
                : {
                    marginLeft: 20,
                  },
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 36,
    backgroundColor: 'white',
    marginTop: 140,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  box: {
    width: '50%',
    height: 175,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#cbd5e1',
  },
  containerandroid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 36,
    backgroundColor: 'white',
    marginTop: 340,
  },
});

export default PulseAnimation;
