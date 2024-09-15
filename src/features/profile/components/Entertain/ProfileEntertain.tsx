import React from 'react';
import {Text, View} from 'react-native';
import {profileInfoStyle} from '../../style';

export const ProfileEntertain = () => {
  return (
    <View style={profileInfoStyle.accountInfo}>
      <View style={profileInfoStyle.accountInfoSection}>
        <Text style={profileInfoStyle.accountInfoTitle}>15</Text>
        <Text style={profileInfoStyle.accountInfoDesc}>Posts</Text>
      </View>
      <View style={profileInfoStyle.accountInfoSection}>
        <Text style={profileInfoStyle.accountInfoTitle}>100k</Text>
        <Text style={profileInfoStyle.accountInfoDesc}>Follower</Text>
      </View>
      <View style={profileInfoStyle.accountInfoSection}>
        <Text style={profileInfoStyle.accountInfoTitle}>1k</Text>
        <Text style={profileInfoStyle.accountInfoDesc}>Following</Text>
      </View>
    </View>
  );
};
