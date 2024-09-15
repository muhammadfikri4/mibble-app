import React from 'react';
import {View} from 'react-native';
import {profileInfoStyle} from '../style';
import {ProfileAction} from './Action/ProfileAction';
import {ProfileEntertain} from './Entertain/ProfileEntertain';

export const ProfileInfo = () => {
  return (
    <>
      <View style={profileInfoStyle.container}>
        <View style={profileInfoStyle.photo} />
        <ProfileEntertain />
      </View>
      <ProfileAction />
    </>
  );
};
