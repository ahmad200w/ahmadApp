import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const OnboardScreen = () => {
  return (
    <View style={styles.Container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

      <ImageBackground
        style={styles.Container}
        source={require('../assest/foto/tree.jpg')}
      />
      <View style={styles.details}>
        <Text style={styles.text1}>Discover</Text>
        <Text style={styles.text1}>world with us</Text>
        <Text style={styles.text2}>
          best,included everthing that to make you comfortabel 
          .way you chosse to make your best experince ...
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => console.warn('hi')}>
          <View style={styles.btn}>
            <Text style={styles.textGs}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  text1: {
    color: 'black',
    fontSize: 35,
    fontWeight: '900',
  },
  text2: {
    color: 'black',
    lineHeight: 25,
    marginTop: 15,
    fontSize: 18,
    fontWeight: '900',
  },
  textGs: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
