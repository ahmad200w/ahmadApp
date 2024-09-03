// components/FilterButton.js
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const FilterButton = ({ item, index, onPress, isSelected }) => {
  return (
    <View style={styles.knopfText}>
      <TouchableOpacity
        onPress={() => onPress(index)}
        style={[styles.textBody, { backgroundColor: isSelected ? 'white' : 'black' }]}
      >
        <Text style={[styles.text, { color: isSelected ? 'black' : 'white' }]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default FilterButton;
