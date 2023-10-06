import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Intro = () => {
    const data =[
        {textA:'Discover',
        textB:'Your Home'},
        {textA:'Color',textB:'that you chosse'}
    ]
  return(<SafeAreaView style={styles.Container}>
    <View style={styles.gView}>
    </View>
    <View style={styles.vView}>
        <Text style={styles.textD}>Discover</Text>
        <Text style={styles.textH}>Your Home</Text>
        
        <View style={{flexDirection:'row'}}>
        <View style={styles.punktg}></View>
        <View style={styles.punkt}></View>
        <View style={styles.punkt}></View>
        <View style={styles.punkt}></View>
        </View>

    </View>

  </SafeAreaView>);
};

export default Intro;

const styles = StyleSheet.create({
  Container: {flex: 1,
     alignItems: 'center',
      justifyContent: 'center'},
  vView: {
    backgroundColor:'#374439',
    width:'100%',
    height:500,
    borderRadius:17,
    marginTop:350,
    alignItems:'center'
  , justifyContent:'center',
  flexDirection:'column',margin:12
  },punkt:{
    width:20,
    height:20,
    backgroundColor:'black',
    borderRadius:17
    ,margin:3
  },textD:{
    fontSize:90

  },textH:{
    fontSize:60
    ,fontWeight:'500'
  },punktg:{
    width:20,
    height:20,
    backgroundColor:'grey',
    borderRadius:17
    ,margin:3
}
});
