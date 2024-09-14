import {Navbar} from '@/features/_global/components/Navbar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProfileContent} from '../components/ProfileContent';

export const ProfileScreen = () => {
  return (
    <View style={style.container}>
      <ProfileContent />
      <Navbar />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
