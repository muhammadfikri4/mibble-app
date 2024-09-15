import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Navbar} from '../components/Navbar';
import {globalStyle} from '../style/global.style';

interface GlobalLayoutProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Layout: React.FC<GlobalLayoutProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[globalStyle.container, style]}>
      {children}
      <Navbar />
    </SafeAreaView>
  );
};
