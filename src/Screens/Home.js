import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import Anzeige from '../Components/Anzeige';
import {useNavigation} from '@react-navigation/native';
import ShoppingsProvider, {ShoppingContext} from '../context/ShoppingsProvider';

const Home = () => {
  const {data, datai} = useContext(ShoppingContext);

  const navigation = useNavigation();
  const sendInfos = () => {
    navigation.navigate('info', {id: data.id});
  };
  const [datei, setDatei] = useState(data);
  console.log(data);

  const [colorChange, setcolorChange] = useState(false);
  const [cont, setCont] = useState(0);
  const {width, height} = useWindowDimensions();

  const filterBy = (proprty , val) => {
    return data.filter(item => item[proprty] === val)
  }

  const pressFilter = [
    {
      id: 0,
      text: '<8Ram>',
      onpresshandel: () => {
        // const highRam = data.filter(item => item.ram === 8);
        setDatei(filterBy('ram' , 8));
      },
    },
    {
      id: 1,
      text: '12Ram',
      onpresshandel: () => {
        const highRam = data.filter(item => item.ram > 8);
        setDatei(highRam);
      },
    },
    {
      id: 2,
      text: 'lowPreis',
      onpresshandel: () => {
        const lowPreis = data.filter(item => item.newPrice <= 750);
        setDatei(lowPreis);
      },
    },
    {
      id: 3,
      text: 'heightPreis',
      onpresshandel: () => {
        const heightPreis = data.filter(item => item.newPrice > 750);
        setDatei(heightPreis);
      },
    },
    {
      id: 4,
      text: '512gb',
      onpresshandel: () => {
        const filterData = data.filter(item =>
          item.Speicher.some(Speicher => Speicher === 512),
        );
        setDatei(filterData);
      },
    },
    {
      id: 4,
      text: 'All',
      onpresshandel: () => {
        setDatei(data);
      },
    },
  ];


  const flattlistItemforTextIcon = ({item, index}) => {
    return (
      <View style={styles.knopfText}>
        <TouchableOpacity
          onPress={() => {
            item.onpresshandel();
            setcolorChange(prevColor => !prevColor);
          }}
          style={[
            styles.textBody,
            {backgroundColor: colorChange ? 'white' : '#332C39'},
          ]}>
          <Text
            style={[styles.text, {color: colorChange ? '#332C39' : 'white'}]}>
            {item.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#609EA2'}}>
      <View style={[styles.ersteSeite, {width: width, height: height}]}>
        <View>
          <FlatList
            horizontal
            data={pressFilter}
            keyExtractor={item => item.id}
            renderItem={flattlistItemforTextIcon}
          />
        </View>
        <FlatList
          data={datei}
          pagingEnabled
          keyExtractor={item => item.id}
          renderItem={({item}) => <Anzeige data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  ersteSeite: {
    backgroundColor: '#609EA2',
  },
  textBody: {
    width: 90,
    height: 35,
    margin: 6,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knopfText: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontWeight: '800',
  },
  unterSeite: {
    backgroundColor: 'black',
    borderRadius: 15,
  },
});
