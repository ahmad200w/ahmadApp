import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const VisaCardInput = ({handelCardInput,handleDateChange,handleCcvChange,cardInput,ccv,expiryDate}) => {
  return (
    <>
    <View style={styles.inputStyle}>
      <Text style={styles.cardNummerStyle}>CARD NUMER</Text>
      <TextInput
        style={styles.cardinput}
        placeholder="***"
        value={cardInput}
        onChangeText={handelCardInput}
      />
    </View>
    <View style={styles.secoundinputStyle}>
      <TextInput
        style={styles.cvv}
        placeholder="MM/YY"
        keyboardType="numeric"
        maxLength={3}
        value={expiryDate}
        onChangeText={handleDateChange}
      />
  
      <TextInput
        style={styles.cvv}
        placeholder="Ccv"
        value={ccv}
        onChangeText={handleCcvChange}
      />
    
    </View>
    </>
  )
}

export default VisaCardInput

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 30,
      },
      cardinput: {
        width: 250,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 5,
        fontSize: 25,
        fontWeight: '600',
        backgroundColor: '#F0EEED',
      },
      cardNummerStyle: {
        fontSize: 22,
        fontWeight: '600',
      },
      cvv: {
        width: 100,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 5,
        fontSize: 25,
        fontWeight: '600',
        backgroundColor: '#F0EEED',
        margin: 2,
      },
      secoundinputStyle: {
        flexDirection: 'row',
        marginTop: 30,
        left: 22,
      }
})