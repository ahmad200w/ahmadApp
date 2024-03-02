import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

//backgroundColor:'#609EA2',
//  ,backgroundColor:'#332C39

const Anzeige = ({data, start}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={[styles.container, {width: 0.9 * width, height: height * 0.25}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={data.backgroundImage}
            style={{width: 150, height: 150, right: 18}}
          />
          <TouchableOpacity
            style={styles.jetztKaufen}
            onPress={() => navigation.navigate('info', {id: data.id})}>
            <Text style={styles.textKaufen}>more Info</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textView}>
          <Text style={styles.textAnzeige}>{data.phone}</Text>
          <Text style={styles.textCode}>{data.newPrice}$</Text>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEED',

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    marginHorizontal: 20,
    marginTop: 9,
    borderRadius: 19,
    padding: 3,
  },
  textAnzeige: {
    fontSize: 18,
    fontWeight: '900',
    right: 59,
  },
  textCode: {
    fontSize: 18,
    fontWeight: '900',

    left: 59,
  },
  unterSeite: {
    backgroundColor: 'black',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jetztKaufen: {
    width: 150,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textKaufen: {
    color: 'white',
    fontWeight: '800',
  },
});

export default Anzeige;
