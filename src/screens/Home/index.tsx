import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Icon from 'react-native-vector-icons/Ionicons';
import useAppNavigation from '../../hooks/useAppNavigation';

export default function HomeScreen() {
  const {data, loading, error} = useFetch({
    url: 'https://openapi.izmir.bel.tr/api/ibb/halfiyatlari/balik/2022-12-12',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useAppNavigation();

  const handleSearch = (data: any) => {
    const results = data.filter((item: any) =>
      item.MalAdi.startsWith(searchTerm.toUpperCase()),
    );
    setSearchResults(results);
    console.log(results);
  };

  useEffect(() => {
    if (data) {
      handleSearch(data.HalFiyatListesi);
    }
  }, [searchTerm]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View className="bg-white h-full">
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
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Balık Ara"
          placeholderTextColor="#6B7280"
          keyboardType="ascii-capable"
          autoCapitalize="none"
        />
      </View>
      <FlatList
        data={
          searchResults && searchResults.length
            ? searchResults
            : data.HalFiyatListesi
        }
        renderItem={({item}) => (
          <View className="px-6 mt-6">
            <TouchableOpacity
              onPress={() => navigation.navigate('Modal', item)}>
              <View className="border border-gray-400 rounded-lg py-6 px-2 flex flex-row justify-between ">
                <View>
                  <Text className="text-black">{item.MalAdi}</Text>
                  <Text className="text-black">{item.Birim}</Text>
                </View>
                <View>
                  <Text className="text-black">
                    Asgari: {item.AsgariUcret}₺
                  </Text>
                  <Text className="text-black">Azemi: {item.AzamiUcret}₺</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.MalId}
      />
    </View>
  );
}
