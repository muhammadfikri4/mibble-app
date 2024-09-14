import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {profileInfoStyle} from '../style';

export const ProfileInfo = () => {
  return (
    <>
      <View style={profileInfoStyle.container}>
        <View style={profileInfoStyle.photo} />
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
      </View>
      <View style={profileInfoStyle.profileDescContainer}>
        <View>
          <Text style={profileInfoStyle.fullName}>Muhammad Fikri</Text>
        </View>
        <View style={profileInfoStyle.profileAction}>
          <Pressable style={profileInfoStyle.pressableButton}>
            <Text style={profileInfoStyle.pressableButtonText}>
              Edit Profile
            </Text>
          </Pressable>
          <Pressable style={profileInfoStyle.pressableButton}>
            <Text style={profileInfoStyle.pressableButtonText}>
              Share Profile
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
