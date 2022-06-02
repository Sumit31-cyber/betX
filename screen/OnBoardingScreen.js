import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Modal,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import MainScreen from './MainScreen';

const width = Dimensions.get('window').width;

const OnBoardingScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [signinPressed, setSigninPressed] = React.useState(false);
  const [signupPressed, setSignupPressed] = React.useState(false);
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={require('../assets/mainImage.png')}
        // resizeMode="contain"
      />
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={{justifyContent: 'center', align: 'center'}}>
        <Text style={styles.subtitle}>India's 1st Sports Prediction</Text>
        <Text style={[styles.subtitle, {marginTop: 0}]}>Platform.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'Sign In'}
          onTap={() => [setModalVisible(true), setSigninPressed(true)]}
        />
        <CustomButton
          title={'Register'}
          onTap={() => [setModalVisible(true), setSignupPressed(true)]}
        />
      </View>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        transparent={true}>
        <View>
          <Pressable
            onPress={() => [setModalVisible(false), setSigninPressed(false)]}
            style={{
              height: 700,
              marginTop: 'auto',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}></Pressable>
          <View
            style={{
              height: signinPressed ? 450 : 450,
              width: '100%',
              backgroundColor: '#181829',
              justifyContent: 'center',
              marginTop: 'auto',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            <Pressable
              onPress={() => [setModalVisible(false), setSigninPressed(false)]}
              style={{
                height: 5,
                width: 60,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 50,
                marginTop: 10,
              }}></Pressable>
            {signinPressed ? <SignInScreen /> : <SignUpScreen />}
          </View>
        </View>
      </Modal>
      {/* <MainScreen /> */}
      {/* <SignInScreen /> */}
    </View>
  );
};

export default OnBoardingScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#181829',
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
