import {useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FishItem} from '../../types';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AppState, Item} from '../../redux/types';
import {addToFavorites, removeFromFavorites} from '../../redux/reducer';

export default function Modal() {
  const route = useRoute();
  const params = route.params as FishItem;

  //redux
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: {app: AppState}) => state.app.favorites,
  );
  const handleAddToFavorites = (item: Item) => {
    const isAlreadyInFavorites = favorites.some(
      fav => fav.bilgi.isim === item.bilgi.isim,
    );
    if (!isAlreadyInFavorites) {
      dispatch(addToFavorites(item));
    }
  };
  const handleRemoveFromFavorites = (itemId: string) => {
    dispatch(removeFromFavorites(itemId));
  };

  return (
    <ScrollView className="bg-white w-full">
      <View className="flex items-end pr-4 pt-4">
        {favorites.some(fav => fav.bilgi.isim === params.bilgi.isim) ? (
          <TouchableOpacity
            onPress={() => handleRemoveFromFavorites(params.bilgi.isim)}>
            <View className="w-9 h-9 flex items-center justify-center">
              <Icon name="heart" size={36} color="#3b82f6" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleAddToFavorites(params)}>
            <View className="w-9 h-9 flex items-center justify-center">
              <Icon name="heart-outline" size={36} color="#3b82f6" />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View className="h-full flex items-center px-8 mb-4">
        <Image
          source={{uri: 'https://balik-api.vercel.app/' + params.image.src}}
          style={styles.image}
        />
        <Text className="text-xl font-bold">{params.bilgi.yereladi}</Text>
        <View className="mt-6 space-y-6">
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">İsim</Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.isim}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">Cins</Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.cins}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">Aile</Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.aile}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">Tur</Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.tur}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">Sınıf</Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.sinif}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">Takım</Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.takim}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">
              İngilizce Adi
            </Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.inglizceadi}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">
              Habitat
            </Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.habitat}
            </Text>
          </View>
          <View className="flex flex-row justify-between ">
            <Text className="w-1/3 text-xl font-bold text-gray-600">
              Dagılım
            </Text>
            <Text className="w-2/3 font-bold text-lg text-right">
              {params.bilgi.dagilim}
            </Text>
          </View>
          <View>
            <Text className="text-xl font-bold text-gray-600 mb-4">Tanım</Text>
            <Text className="text-lg font-semibold">{params.bilgi.tanim}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
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
