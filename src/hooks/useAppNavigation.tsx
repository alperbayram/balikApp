import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {StackScreens} from '../types';

export default function useAppNavigation() {
  return useNavigation<NavigationProp<StackScreens>>();
}