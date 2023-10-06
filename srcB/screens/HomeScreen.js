import {Dimensions, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import COLORS from '../contest/colors';
import places from '../contest/places';
import Card from '../components/Card';
import RecommendedCard from '../components/RecommendedCard';
const {width} = Dimensions.get('screen');
const HomeScreen = () => {
    
  const categoryIcons = [
    <Image
      style={styles.foto}
      source={require('../assest/icons/flight.png')}
    />,
    <Image  style={styles.foto} source={require('../assest/icons/umbrella.png')} />,
    <Image  style={styles.foto} source={require('../assest/icons/grocery-store.png')} />,
    <Image   style={styles.foto} source={require('../assest/icons/placeholder.png')} />,
  ];
  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <StatusBar translucent={false} backgroundColor={COLORS.primary} />
    <View style={styles.header}>
      <Image style={styles.iconN} source={require('../assest/icons/menu.png')} />
      <Image style={styles.iconN} source={require('../assest/icons/bell.png')} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          height: 120,
          paddingHorizontal: 20,
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.headerTitle}>Explore the</Text>
          <Text style={styles.headerTitle}>beautiful places</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../assest/icons/grocery-store.png')} style={styles.iconN} />
            <TextInput
              placeholder="Search place"
              style={{color: COLORS.grey}}
            />
          </View>
        </View>
      </View>
      <ListCategories />
      <Text style={styles.sectionTitle}>Places</Text>
      <View>
        <FlatList
          contentContainerStyle={{paddingLeft: 20}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({item}) => <Card place={item} />}
        />
        <Text style={styles.sectionTitle}>Recommended</Text>
        <FlatList
          snapToInterval={width - 20}
          contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={places}
          renderItem={({item}) => <RecommendedCard place={item} />}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
 
};

export default HomeScreen;

const styles = StyleSheet.create({

  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  foto: {
    width: 25,
    height: 25,
  },iconN:{width:28,
height:25},
});
