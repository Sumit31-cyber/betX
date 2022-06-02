import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './components/BottomSheet';
import SignUp from './components/SignUp';
import SignInScreen from './screen/SignInScreen';
import SignUpScreen from './screen/SignUpScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screen/MainScreen';
import OnBoardingScreen from './screen/OnBoardingScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  // const ref = useRef(null);
  // const onPress = useCallback(() => {
  //   const isActive = ref?.current?.isActive();

  //   if (isActive) {
  //     ref?.current?.scrollTo(0);
  //   } else {
  //     ref?.current?.scrollTo(-200);
  //   }
  // }, []);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onBoarding">
          <Stack.Screen name="main" component={MainScreen} />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="onBoarding"
            component={OnBoardingScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});
