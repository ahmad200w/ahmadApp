import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

const VisaCard = ({cardInput, expiryDate}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        styles.visaBody,
        {
          width: 0.85 * width,
          height: height * 0.27,
        },
      ]}>
      <Text style={styles.visa}>VISA</Text>
      <Text style={styles.visaNumber}>{cardInput}</Text>
      <View style={styles.moreDateils}>
        <View style={styles.visaPay}>
          <Text style={styles.visaText}>VISA</Text>
          <Text style={styles.pay}>Pay</Text>
        </View>
        <Text style={styles.Exdate}>{expiryDate}</Text>
      </View>
    </View>
  );
};

export default VisaCard;

const styles = StyleSheet.create({
  visaBody: {
    backgroundColor: 'black',
    borderRadius: 30,
    alignItems: 'center',
  },
  visa: {
    fontSize: 30,
    fontWeight: '800',
    color: 'blue',
    left: 80,
    padding: 15,
    marginTop: 15,
  },
  visaNumber: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
    marginTop: 15,
  },
  moreDateils: {
    flexDirection: 'row',
    marginTop: 30,
  },
  visaText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '800',
  },
  visaPay: {
    flexDirection: 'row',
    marginRight: 80,
  },
  pay: {
    color: '#FEBE10',
    fontSize: 25,
    fontWeight: '800',
    marginRight: 2,
  },
  Exdate: {
    color: 'yellow',
    fontSize: 25,
    fontWeight: '800',
    marginLeft: 22,
  },
});
