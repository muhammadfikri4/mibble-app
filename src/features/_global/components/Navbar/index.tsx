import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {menus} from './config';
import {navbarStyle} from './style/navbar.style';

export const Navbar = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleNavigate = (to: string) => {
    navigation.navigate(to as never);
  };

  return (
    <View style={navbarStyle.container}>
      <View style={navbarStyle.subcontainer}>
        {menus.map((Item, index) => (
          <Pressable
            key={index}
            style={navbarStyle.menuItem}
            onPress={() => handleNavigate(Item.to)}>
            <Item.icon
              width={20}
              strokeWidth={3}
              stroke={route.name === Item.to ? '#fff' : '#9fa19f'}
            />
            <Text style={navbarStyle.menuText}>{Item.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
