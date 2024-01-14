import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import useAppNavigation from '../../hooks/useAppNavigation';
import SplashScreen from '../SplashScreen';
import PulseAnimationList from '../../components/PulseAnimationList';

export default function HomeScreen() {
  const [date, setDate] = useState(new Date());
  const {data, loading, error} = useFetch({
    url: 'https://openapi.izmir.bel.tr/api/ibb/halfiyatlari/balik/2022-12-12',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useAppNavigation();

  //add date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: any) => {
    setDate(date);
    hideDatePicker();
  };

  //add Search
  const handleSearch = (data: any) => {
    const results = data.filter((item: any) =>
      item.MalAdi.startsWith(searchTerm.toUpperCase()),
    );
    setSearchResults(results);
  };

  useEffect(() => {
    if (data) {
      handleSearch(data.HalFiyatListesi);
    }
  }, [searchTerm]);

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View className="bg-white h-full">
      <Text className="text-black text-center p-6 text-lg">
        İzmir Hal Balık Fiyatları
      </Text>
      <View className="flex flex-row">
        <View className="pl-6 w-3/5">
          <View className="relative z-50">
            <View className="absolute inset-y-1 right-2">
              <View className="w-9 h-9 flex items-center justify-center">
                <Icon name="search" size={24} color="black" />
              </View>
            </View>
          </View>
          <TextInput
            className="block w-full h-12 pr-12 pl-4  rounded-xl text-sm placeholder-gray-100 focus:outline-none focus:text-gray-900 border border-blue-500"
            textAlignVertical="center"
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Balık Ara"
            placeholderTextColor="#6B7280"
            keyboardType="ascii-capable"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity onPress={showDatePicker} className=" pl-2 pr-6 w-2/5">
          <View className="relative z-50">
            <View className="absolute inset-y-1 right-2">
              <View className=" w-9 h-9 flex items-center justify-center">
                <Fontisto name="date" size={20} color="black" />
              </View>
            </View>
          </View>
          <View className="flex justify-center h-12 pr-12 pl-4 rounded-xl text-sm border border-blue-500">
            <Text className="w-full">
              {date && moment(new Date(date)).format('MM/DD/yyyy')}
            </Text>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            maximumDate={new Date()}
            date={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>

      <View className="flex flex-row justify-between px-8 py-6">
        <View>
          <Text className="text-lg">Balık Türü</Text>
          <Text className="text-sm">Birim</Text>
        </View>
        <View className="">
          <Text className="text-lg text-right">Fiyat</Text>
          <Text className="text-xs text-right">En Düşük</Text>
          <Text className="text-xs text-right">En Yüksek</Text>
        </View>
      </View>

      {loading ? (
        <PulseAnimationList></PulseAnimationList>
      ) : (
        <FlatList
          data={
            searchResults && searchResults.length
              ? searchResults
              : data.HalFiyatListesi
          }
          renderItem={({item}) => (
            <View className="px-6">
              <TouchableOpacity
                onPress={() => navigation.navigate('Modal', item)}>
                <View className="border-t border-blue-500 rounded-lg py-4 px-2 flex flex-row justify-between">
                  <View>
                    <Text className="text-black text-sm">{item.MalAdi}</Text>
                    <Text className="text-black text-xs">{item.Birim}</Text>
                  </View>
                  <View className="flex flex-row">
                    <View>
                      <Text className="text-black text-sm">
                        {item.AsgariUcret}₺
                      </Text>
                      <Text className="text-black text-sm">
                        {item.AzamiUcret}₺
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.MalId}
        />
      )}
    </View>
  );
}
