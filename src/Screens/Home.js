import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';

import Anzeige from '../Components/Anzeige';
import {useNavigation} from '@react-navigation/native';
import ShoppingsProvider, {ShoppingContext} from '../context/ShoppingsProvider';
import Search from '../Components/Search';
import {current} from '@reduxjs/toolkit';
import FilterButton from '../Components/FilterButton';

const Home = () => {

  const {data, datai} = useContext(ShoppingContext);
  const navigation = useNavigation();
  const sendInfos = () => {
    navigation.navigate('info', {id: data.id});
  };
  const [datei, setDatei] = useState(data);
  console.log(data);

  const [Selcted, SetSelcted] = useState(false);
  const [cont, setCont] = useState(0);
  const {width, height} = useWindowDimensions();
  const [slize, setSlize] = useState(0);

  const filterBy = (proprty, val) => {
    return data.filter(item => item[proprty] === val);
  };


  
   
    const searchFilter = useCallback((searchText) => {
      if (!searchText || searchText.trim() === "") {
        setDatei(data); 
      } else {
        const filteredData = data.filter(item => {
          // شروط التغيير
          return (
            item.phoneType.toLowerCase().includes(searchText.toLowerCase()) ||
            item.phone.toLowerCase().includes(searchText.toLowerCase())
            
          );
        });
        setDatei(filteredData);
      }
    }, [data, setDatei]);  


  const pressFilter = [
    {
      id: 0,
      text: '8Ram',
      onpresshandel: () => {
        // const highRam = data.filter(item => item.ram === 8);
        setDatei(filterBy('ram', 8));
      },
      isSelcted: slize === 0 ? true : false,
    },
    {
      id: 1,
      text: '12Ram',
      onpresshandel: () => {
        const highRam = data.filter(item => item.ram > 8);
        setDatei(highRam);
      },
      isSelcted: slize === 1 ? true : false,
    },
    {
      id: 2,
      text: 'lowPreis',
      onpresshandel: () => {
        const lowPreis = data.filter(item => item.newPrice <= 750);
        setDatei(lowPreis);
      },
      isSelcted: slize === 2 ? true : false,
    },
    {
      id: 3,
      text: 'heightPreis',
      onpresshandel: () => {
        const heightPreis = data.filter(item => item.newPrice > 750);
        setDatei(heightPreis);
      },
      isSelcted: slize === 3 ? true : false,
    },
    {
      id: 4,
      text: '512GB',
      onpresshandel: () => {
        const filterData = data.filter(item =>
          item.Speicher.some(Speicher => Speicher === 512),
        );
        setDatei(filterData);
      },
      isSelcted: slize === 4 ? true : false,
    },
    {
      id: 5,
      text: 'all',
      onpresshandel: () => {
        setDatei(data);
      },
      isSelcted: slize === 5 ? true : false,
    },
  ];
  const handlePress = (index) => {
    pressFilter[index].onpresshandel();
    setSlize(index);
  };
  const flattlistItemforTextIcon = ({ item, index }) => (
    <FilterButton
      item={item}
      index={index}
      onPress={handlePress}
      isSelected={slize === index}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Search searchFilter={searchFilter} />
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
  container:{
    backgroundColor: '#FEBE10',
     alignItems: 'center'
    },
  ersteSeite: {
    backgroundColor: '#FEBE10',
  },
  
});
