import {useState} from 'react';
import {Animated} from 'react-native';
import BootSplash from 'react-native-bootsplash';

type Props = {
  onAnimationEnd: () => void;
};

export const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../assets/bootsplash_manifest.json'),

    logo: require('../../assets/image/fish4.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 500,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Animated.Image {...logo} style={[logo.style]} />
    </Animated.View>
  );
};
