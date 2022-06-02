import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({title, onTap}) => {
  return (
    <Pressable onPress={onTap} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    width: 250,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
