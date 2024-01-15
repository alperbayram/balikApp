import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PulseAnimation from '../../components/PulseAnimation';
import useAppNavigation from '../../hooks/useAppNavigation';
import useFetch from '../../hooks/useFetch';

export default function InfoScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useAppNavigation();
  const {data, loading, error} = useFetch({
    url: 'https://balik-api.vercel.app/baliks',
  });

  //add Search
  const handleSearch = (data: any) => {
    const results = data.filter((item: any) =>
      item.bilgi.isim.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  };

  useEffect(() => {
    if (data) {
      handleSearch(data);
    }
  }, [searchTerm]);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View className="bg-white h-full">
      <Text className="text-black text-center p-6 text-lg">Balık Türleri</Text>
      <View className="px-6 pb-6">
        <View className="relative z-50">
          <View className="absolute inset-y-2 right-2">
            <View className="w-9 h-9 flex items-center justify-center">
              <Icon name="search" size={24} color="black" />
            </View>
          </View>
        </View>
        <TextInput
          className="block border border-blue-500 w-full h-12 pr-12 pl-4 rounded-xl  text-sm placeholder-gray-100 focus:outline-none focus:text-gray-900"
          textAlignVertical="center"
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Balık Ara"
          placeholderTextColor="#6B7280"
          keyboardType="ascii-capable"
          autoCapitalize="none"
        />
      </View>
      {loading ? (
        <PulseAnimation></PulseAnimation>
      ) : (
        <View style={styles.app}>
          <FlatList
            data={
              searchResults && searchResults.length
                ? searchResults
                : data.sort((a: any, b: any) =>
                    a.bilgi.isim.localeCompare(b.bilgi.isim),
                  )
            }
            numColumns={2}
            renderItem={({item,index})=>(
              <View
              style={[
                styles.item,
                index % 2 === 0
                  ? {
                      marginRight: 0,
                    }
                  : {
                      marginLeft: 20,
                    },
              ]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Modal', item)}
                className="w-full flex text-center justify-center items-center">
                <Image
                  source={{uri: 'https://balik-api.vercel.app/' + item.image.src}}
                  style={styles.image}
                />
                <Text className="text-xs font-medium">{item.bilgi.isim}</Text>
              </TouchableOpacity>
            </View>
            )}
            keyExtractor={item => item.bilgi.isim}
          />
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  item: {
    flex: 1,
    maxWidth: '50%', // 100% devided by the number of rows you want
    alignItems: 'center',
    justifyContent: 'center',
    height: 175,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#3b82f6',
  },
  image: {
    height: 100,
    width: 100,
  },
});
