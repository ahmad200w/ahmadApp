import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Product = () => {
  const [wahl, setWahl] = useState([]);
  
  const continents = [
    {
      id: 0,
      name: 'Africa',
      anmi: [
       { lions: {habitat: 'savannah', eats: 'meat',imag:require('../assest/foto/animalsPhoto/pexels-alexas-fotos-2220337.jpg')}},
       { elephants: {habitat: 'forest and savannah', eats: 'plants',imag:require('../assest/foto/animalsPhoto')}},
       { giraffes: {habitat: 'savannah', eats: 'leaves and shoots',imag:require('../assest/foto/animalsPhoto')}},
       { cheetahs: {habitat: 'savannah', eats: 'meat',imag:require('../assest/foto/animalsPhoto')}},
       {  zebras: {habitat: 'savannah', eats: 'grass and leaves',imag:require('../assest/foto/animalsPhoto')}},
       { hyenas: {habitat: 'savannah and desert', eats: 'meat',imag:require('../assest/foto/animalsPhoto')}},
       { hippos: {habitat: 'rivers and lakes', eats: 'plants',imag:require('../assest/foto/animalsPhoto')}},
       {  crocodiles: {habitat: 'rivers and lakes', eats: 'meat',imag:require('../assest/foto/animalsPhoto')}},
       { gorillas: {habitat: 'forests', eats: 'plants and insects',imag:require('../assest/foto/animalsPhoto')}},
       {chimpanzees: {habitat: 'forests', eats: 'plants and insects',imag:require('../assest/foto/animalsPhoto')}},
      ],
      icon: require('../assest/foto/contien./south-africa.png'),
    },
    {
      id: 1,
      name: 'Antarctica',
      
      icon: require('../assest/foto/contien./antarctic.png'),
    },
    {
      id: 2,
      name: 'Asia',
      anmi:[ 
        { tigers: { habitat: 'forests and grasslands', eats: 'meat' ,imag:require('../assest/foto/animalsPhoto')}},
        { asianElephants: { habitat: 'forests and grasslands', eats: 'plants' ,imag:require('../assest/foto/animalsPhoto')}},
        { bears: { habitat: 'forests', eats: 'plants and meat' ,imag:require('../assest/foto/animalsPhoto')}},
        { gorillas: { habitat: 'forests', eats: 'plants and insects',imag:require('../assest/foto/animalsPhoto') }},
        { monkeys: { habitat: 'forests', eats: 'plants and insects',imag:require('../assest/foto/animalsPhoto') }},
        { snakes: { habitat: 'various', eats: 'meat' }},
        {chineseTigers: { habitat: 'forests and grasslands', eats: 'meat',imag:require('../assest/foto/animalsPhoto')}},
        { giantPandas: { habitat: 'mountainous regions', eats: 'bamboo' ,imag:require('../assest/foto/animalsPhoto')}},
        { raccoons: { habitat: 'forests', eats: 'plants and insects',imag:require('../assest/foto/animalsPhoto') }},
        { whiteTigers: { habitat: 'forests and grasslands', eats: 'meat' ,imag:require('../assest/foto/animalsPhoto')}
      }],
      icon: require('../assest/foto/contien./asia.png'),
    },
    {
      id: 3,
      name: 'Australia',
      countries: ['Australia', 'New Zealand', 'Papua New Guinea'],
      icon: require('../assest/foto/contien./australia.png'),
    },
    {
      id: 4,
      name: 'Europe',
      countries: ['France', 'Germany', 'Italy', 'Spain', 'United Kingdom'],
      icon: require('../assest/foto/contien./europe.png'),
    },
    {
      id: 5,
      name: 'N America',
      countries: ['Canada', 'Mexico', 'United States'],
      icon: require('../assest/foto/contien./canada.png'),
    },
    {
      id: 6,
      name: 'S America',
      countries: ['Argentina', 'Brazil', 'Colombia', 'Peru'],
      icon: require('../assest/foto/contien./south-america-icon-614x460.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.intoText}>AnimalWorld</Text>
      <FlatList
        horizontal
        data={continents}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                width: 70,
                height: 70,
                margin: 7,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={{width: 40, height: 40}} source={item.icon} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
        horizontal
        renderItem={({item}) => {
          <View></View>;
        }}
      />
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC609',
  },
  intoText: {
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 20,
    marginTop: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  },
});
