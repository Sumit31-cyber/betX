import {
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {block} from 'react-native-reanimated';
import BigButton from '../components/BigButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from 'react-native-check-box';

const SignInScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#181829',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
      }}>
      <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
        Welcome
      </Text>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          marginTop: 20,
          padding: 20,
          borderRadius: 12,
          flexDirection: 'row',
        }}>
        <AntDesign
          name="user"
          color="grey"
          size={20}
          style={{marginRight: 10}}
        />
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={'grey'}
          value={fullName}
          onChangeText={value => setFullName(value)}
          style={styles.input}
        />
      </View>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          marginTop: 30,
          padding: 20,
          borderRadius: 12,
          flexDirection: 'row',
        }}>
        <Ionicons
          name="md-lock-closed-outline"
          color="grey"
          size={20}
          style={{marginRight: 10}}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'grey'}
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.input}
          secureTextEntry={visible ? false : true}
        />
        <Pressable onPress={() => setVisible(!visible)}>
          <Feather
            name="eye-off"
            color="grey"
            size={20}
            style={{position: 'absolute', alignSelf: 'center', right: 10}}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CheckBox
            style={{marginRight: 10}}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            isChecked={isChecked}
            checkBoxColor={'grey'}
          />
          <Text style={{color: 'gray'}}>Remember me</Text>
        </View>

        <Text style={{color: 'gray'}}>Forgot password</Text>
      </View>
      <BigButton title={'Sign In'} />
      <Text
        style={{
          fontSize: 12,
          color: 'white',
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        Don't have account?{' '}
        <Text style={{fontSize: 12, color: '#2960b3'}}>SignIn</Text>
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  input: {
    fontWeight: '500',
    fontSize: 18,
    color: 'white',
    marginRight: 40,
    flex: 1,
  },
});
