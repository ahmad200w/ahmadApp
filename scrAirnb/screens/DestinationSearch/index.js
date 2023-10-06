import {FlatList, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import search from '../../assets/data/search';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation =useNavigation();
  return (
    <View style={styles.conatiner}>

      <GooglePlacesAutocomplete
     placeholder='Where are you going?'
     onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
      navigation.navigate('Guests', { viewport: details.geometry.viewport });
    }}>

      </GooglePlacesAutocomplete>
      {/* Input component*/}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going"
        value={inputText}
        onChange={setInputText}
      />
      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable style={styles.row} onPress={()=>navigation.navigate('Guests')}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/pin.png')} style={styles.image}/>

            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />

      {/* List of destination */}
    </View>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
  conatiner: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white'
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },row:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },imageContainer:{
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
    
  

  },
  image:{
    width:35,
    height:35
  },locationText:{
    marginTop:35

  }
});
