import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function InfoScreen() {
  return (
    <View className="bg-white h-full">
      <Text className="text-black text-center p-6 text-lg">
        Balık Türleri
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
          // value={searchTerm}
          // onChangeText={setSearchTerm}
          placeholder="Balık Ara"
          placeholderTextColor="#6B7280"
          keyboardType="ascii-capable"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
