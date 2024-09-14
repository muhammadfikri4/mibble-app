import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen} from '../features/auth/screen/LoginScreen';
import {RegisterScreen} from '../features/auth/screen/RegisterScreen';
import {HomeScreen} from '../features/home/screen/Home';
import { ProfileScreen } from '@/features/profile/screen/profile-screen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={'#000'} />
      <Stack.Navigator
        initialRouteName="home-tab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login-screen" component={LoginScreen} />
        <Stack.Screen name="register-screen" component={RegisterScreen} />
        <Stack.Screen name="home-screen" component={HomeScreen} />
        <Stack.Screen name="profile-screen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
