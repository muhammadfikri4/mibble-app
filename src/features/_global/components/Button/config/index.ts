import { StyleSheet, TouchableOpacityProps } from 'react-native';


export interface IGloButton extends TouchableOpacityProps {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'black' | 'primary' | 'success' | 'danger';
}

export const returnSize = (size: IGloButton['size']) => {
  switch (size) {
    case 'md':
      return style.buttonMd;
    case 'sm':
      return style.buttonSm;
    default:
      return style.buttonMd;
  }
};

export const returnVariant = (variant: IGloButton['variant']) => {
  switch (variant) {
    case 'black':
      return style.black;
    case 'danger':
      return style.danger;
    case 'primary':
      return style.primary;
    case 'success':
      return style.success;
    default:
      return style.black;
  }
};

export const style = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: 'black',
  },
  buttonMd: {
    backgroundColor: 'black',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },
  buttonSm: {
    backgroundColor: 'black',
    padding: 8,
    paddingVertical: 13,
    borderRadius: 6,
  },
  colorWhite: {
    color: 'white',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  black: {
    backgroundColor: 'black',
  },
  primary: {
    backgroundColor: '#51a9fc',
  },
  success: {
    backgroundColor: 'green',
  },
  danger: {
    backgroundColor: 'red',
  },
});
