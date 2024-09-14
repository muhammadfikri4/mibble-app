import {Navbar} from '@/features/_global/components/Navbar';
import React from 'react';
import {View} from 'react-native';
import {HomeContent} from '../components/HomeContent';
import {homeScreenStyle} from '../style/home-screen.style';

export const HomeScreen = () => {
  return (
    <View style={homeScreenStyle.view}>
      <HomeContent />
      <Navbar />
    </View>
  );
};
