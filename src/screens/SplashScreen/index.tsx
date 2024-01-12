import {View, Text, Image} from 'react-native';

const image = {
  uri: 'https://media.istockphoto.com/id/147551317/photo/water-fish-splash-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=sn0ZXV2xEh6NcK1XBAQDhmetbBNq7ULpL8tl_M9p2Hk=',
};

export default function SplashScreen() {
  return (
    <View className="bg-white h-full w-full flex justify-center items-center">
      <Image
        source={image}
        style={{
          height: 400,
          width: 400,
        }}></Image>
    </View>
  );
}
