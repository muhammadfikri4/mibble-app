import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';
import RNModal from 'react-native-modal';

interface IModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  // [x: string]: any;
}

interface CustomTextProps extends TextProps {
  title?: string;
}
export const Modal = ({isVisible = false, children, ...props}: IModalProps) => {
  return (
    <RNModal
      {...props}
      isVisible={isVisible}
      animationInTiming={750}
      animationOutTiming={750}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({children}: {children: React.ReactNode}) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader: React.FC<CustomTextProps> = ({title, ...rest}) => (
  <View style={styles.header}>
    <Text {...rest}>{title}</Text>
  </View>
);

const ModalBody = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  body: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
