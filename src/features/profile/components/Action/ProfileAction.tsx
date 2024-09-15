import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {profileInfoStyle} from '../../style';

export const ProfileAction = () => {
  return (
    <View style={profileInfoStyle.profileDescContainer}>
      <View>
        <Text style={profileInfoStyle.fullName}>Muhammad Fikri</Text>
      </View>
      <View style={profileInfoStyle.profileAction}>
        <Pressable style={profileInfoStyle.pressableButton}>
          <Text style={profileInfoStyle.pressableButtonText}>Edit Profile</Text>
        </Pressable>
        <Pressable style={profileInfoStyle.pressableButton}>
          <Text style={profileInfoStyle.pressableButtonText}>
            Share Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
