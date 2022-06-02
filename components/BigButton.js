import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BigButton = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: '#2960b3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        padding: 20,
        marginTop: 'auto',
      }}>
      <Text style={{color: '#fff', fontSize: 18}}>{title}</Text>
    </View>
  );
};

export default BigButton;

const styles = StyleSheet.create({});
