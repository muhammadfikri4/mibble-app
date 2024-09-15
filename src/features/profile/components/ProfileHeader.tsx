import {HamburgerIcon} from '@/features/_global/components/Icons/Hamburger';
import {PrivacyIcon} from '@/features/_global/components/Icons/Secure';
import React from 'react';
import {Text, View} from 'react-native';
import {profileHeaderStyle} from '../style';

export const ProfileHeader = () => {
  return (
    <View style={profileHeaderStyle.headerContainer}>
      <View style={profileHeaderStyle.profile}>
        <PrivacyIcon width={26} strokeWidth={3} stroke={'#000'} />
        <Text style={profileHeaderStyle.profileName}>muhfikrii</Text>
      </View>
      <HamburgerIcon width={20} stroke={'#000'} strokeWidth={14} />
    </View>
  );
};
