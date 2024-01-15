import {useRoute} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Results} from '../../types';

export default function Modal() {
  const route = useRoute();
  const {bilgi, image} = route.params as any;
  return (
    <View className="bg-white h-full flex items-center px-8">
      <Image
        source={{uri: 'https://balik-api.vercel.app/' + image.src}}
        style={styles.image}
      />
      <Text className="text-xl font-bold">{bilgi.yereladi}</Text>
      <View className="mt-6 space-y-6">
        <View className="flex flex-row justify-between ">
          <Text className="w-1/3 text-xl font-bold text-gray-600">İsim</Text>
          <Text className="w-2/3 font-bold text-lg text-right">
            {bilgi.isim}
          </Text>
        </View>
        <View className="flex flex-row justify-between ">
          <Text className="w-1/3 text-xl font-bold text-gray-600">Cins</Text>
          <Text className="w-2/3 font-bold text-lg text-right">
            {bilgi.cins}
          </Text>
        </View>
        <View className="flex flex-row justify-between ">
          <Text className="w-1/3 text-xl font-bold text-gray-600">Aile</Text>
          <Text className="w-2/3 font-bold text-lg text-right">
            {bilgi.aile}
          </Text>
        </View>
        <View className="flex flex-row justify-between ">
          <Text className="w-1/3 text-xl font-bold text-gray-600">Tur</Text>
          <Text className="w-2/3 font-bold text-lg text-right">
            {bilgi.tur}
          </Text>
        </View>
        <View className="flex flex-row justify-between ">
          <Text className="w-1/3 text-xl font-bold text-gray-600">Sınıf</Text>
          <Text className="w-2/3 font-bold text-lg text-right">
            {bilgi.sinif}
          </Text>
        </View>
        <View className="flex flex-row justify-between ">
          <Text className="w-1/3 text-xl font-bold text-gray-600">Takım</Text>
          <Text className="w-2/3 font-bold text-lg text-right">
            {bilgi.takim}
          </Text>
        </View>
        <View className="flex flex-row justify-between ">
          <Text className="w-1/3 text-xl font-bold text-gray-600">
            İngilizce Adi
          </Text>
          <Text className="w-2/3 font-bold text-lg text-right">
            {bilgi.inglizceadi}
          </Text>
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
  columnfirst: {},
  columnseconf: {},
});
