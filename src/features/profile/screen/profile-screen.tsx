import {Layout} from '@/features/_global/screen/Layout';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ProfileContent} from '../components/ProfileContent';

export const ProfileScreen = () => {
  return (
    <Layout style={style.container}>
      <ProfileContent />
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
