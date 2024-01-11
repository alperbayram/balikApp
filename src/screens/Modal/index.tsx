import {useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {Results} from '../../types';

export default function Modal() {
  const route = useRoute();
  const {MalAdi, MalTipAdi, HalTuru, Birim, AsgariUcret, AzamiUcret} =
    route.params as Results;

  return (
    <View>
      <View>
        <View>
          <Text>{`MalAdi: ${MalAdi}`}</Text>
          <Text>{`MalTipAdi: ${MalTipAdi}`}</Text>
          <Text>{`HalTuru: ${HalTuru}`}</Text>
          <Text>{`Birim: ${Birim}`}</Text>
          <Text>{`AsgariUcret: ${AsgariUcret}`}</Text>
          <Text>{`AzamiUcret: ${AzamiUcret}`}</Text>
          {/* Diğer alanlar... */}
        </View>
      </View>
    </View>
  );
}
