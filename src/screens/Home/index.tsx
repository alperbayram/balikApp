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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import PulseAnimationList from '../../components/PulseAnimationList';

export default function HomeScreen() {
  const lastDate = moment(new Date().setDate(new Date().getDate() - 1)).format(
    'yyyy-MM-DD',
  );
  const [date, setDate] = useState(lastDate);
  const [dataurl, setDataUrl] = useState(
    `https://openapi.izmir.bel.tr/api/ibb/halfiyatlari/balik/`,
  );
  const {data, loading, error} = useFetch({
    url: dataurl,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  //add date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: any) => {
    const newDate = moment(new Date(date)).format('yyyy-MM-DD');
    setDate(newDate);
    hideDatePicker();
  };

  //add Search
  const handleSearch = (data: any) => {
    const results = data.filter((item: any) =>
      item.MalAdi.toUpperCase().includes(searchTerm.toUpperCase()),
    );
    setSearchResults(results);
  };

  useEffect(() => {
    if (data) {
      handleSearch(data.HalFiyatListesi);
    }
  }, [searchTerm]);

  useEffect(() => {
    setDataUrl(
      `https://openapi.izmir.bel.tr/api/ibb/halfiyatlari/balik/${date}`,
    );
  }, [date]);

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View className="bg-white h-full">
      <Text className="text-black text-center p-6 text-2xl font-bold">
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
            <Text className="w-full text-xs">{date && date}</Text>
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
      <View className="flex flex-row justify-between px-6 py-4 border-b border-blue-500 mx-2">
        <View>
          <Text className="text-lg font-semibold">Balık Türü</Text>
          <Text className="text-sm font-semibold">Birim</Text>
        </View>
        <View className="">
          <Text className="text-lg text-right font-semibold">Fiyat</Text>
          <Text className="text-xs text-right font-semibold">En Yüksek</Text>
          <Text className="text-xs text-right font-semibold">En Düşük</Text>
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
            <View className="px-2">
              <View className="border-b border-blue-500 py-4 px-6 flex flex-row justify-between">
                <View>
                  <Text className="text-black text-sm font-medium">
                    {item.MalAdi}
                  </Text>
                  <Text className="text-black text-xs">{item.Birim}</Text>
                </View>
                <View className="flex flex-row">
                  <View>
                    <Text className="text-black text-sm text-right">
                      {item.AzamiUcret}₺
                    </Text>
                    <Text className="text-black text-sm text-right">
                      {item.AsgariUcret}₺
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.MalId}
        />
      )}
    </View>
  );
}
