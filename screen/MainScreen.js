import {Image, StyleSheet, Text, Dimensions, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const width = Dimensions.get('window').width;

const MainScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  return (
    <>
      <SignInScreen />
      <SignInScreen />
    </>
  );
};

export default MainScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  logo: {
    height: 80,
    width: width - 200,
    alignSelf: 'center',
  },
  subtitle: {
    color: '#e6e6e6',
    fontSize: 20,
    letterSpacing: 1.2,
    marginTop: 22,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 40,
  },
  image: {
    height: 400,
    width,
    alignSelf: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
});
