import {HomeIcon} from '@/features/_global/components/Icons/Home';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {ProfileHeader} from './ProfileHeader';
import {ProfileInfo} from './ProfileInfo';

export const ProfileContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <ProfileHeader />
      <ProfileInfo />
      <View style={style.tabsContainer}>
        <Pressable
          onPress={() => setActiveTab(1)}
          style={[style.tabItem, activeTab === 1 ? style.border : {}]}>
          <HomeIcon width={20} strokeWidth={3} stroke={'#000'} />
        </Pressable>
        <Pressable
          onPress={() => setActiveTab(2)}
          style={[style.tabItem, activeTab === 2 ? style.border : {}]}>
          <HomeIcon width={20} strokeWidth={3} stroke={'#000'} />
        </Pressable>
        <Pressable
          onPress={() => setActiveTab(3)}
          style={[style.tabItem, activeTab === 3 ? style.border : {}]}>
          <HomeIcon width={20} strokeWidth={3} stroke={'#000'} />
        </Pressable>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ababab',
    borderStyle: 'solid',
  },
  tabItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ababab',
    width: 'auto',
    padding: 10,
    paddingHorizontal: 50,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  border: {
    borderColor: '#000',
  },
});
