import React from 'react';
import {View, Text, FlatList, TextInput, Image} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const {data, loading, error} = useFetch({
    url: 'https://openapi.izmir.bel.tr/api/ibb/halfiyatlari/balik/2022-12-12',
  });

  console.log(data);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View className="bg-white">
      <Text className="text-black text-center p-6 text-lg">
        İzmir Hal Balık Fiyatları
      </Text>
      <View className="px-6 pb-6">
        <View className="relative z-50">
          <View className="absolute inset-y-3 right-2">
            <View className="w-9 h-9 flex items-center justify-center">
              <Icon name="search" size={24} color="black" />
            </View>
          </View>
        </View>
        <TextInput
          className="block w-full h-14 pr-12 pl-5  rounded-xl  text-sm placeholder-gray-100 focus:outline-none focus:text-gray-900"
          style={{
            backgroundColor: '#F2F3F2',
          }}
          textAlignVertical="center"
          // onChangeText={setSearch}
          // value={search}
          placeholder="Balık Ara"
          placeholderTextColor="#6B7280"
          keyboardType="ascii-capable"
          autoCapitalize="none"
        />
      </View>
      <FlatList
        data={data.HalFiyatListesi}
        renderItem={({item}) => (
          <View className="px-6 mt-6">
            <View className="border border-gray-400 rounded-lg py-6 px-2 flex flex-row justify-between ">
              <View>
                <Text className="text-black">{item.MalAdi}</Text>
                <Text className="text-black">{item.Birim}</Text>
              </View>
              <View>
                <Text className="text-black">Asgari: {item.AsgariUcret}₺</Text>
                <Text className="text-black">Azemi: {item.AzamiUcret}₺</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.MalId}
      />
    </View>
  );
}
