import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Logo from '../../../../core/assets/image/Logo-white.png';
import {style} from '../style';
import {Modal} from './Modal';

interface IModalog {
  show: boolean;
  onHide: () => void;
  title: string;
  body: string;
  buttonTitle: string;
}

export const Modalog: React.FC<IModalog> = ({
  show,
  onHide,
  body,
  title,
  buttonTitle,
}) => {
  return (
    <>
      <Modal isVisible={show}>
        <TouchableOpacity style={style.container} onPress={onHide}>
          <View style={style.icon}>
            {/* <Text style={style.iconText}>M</Text> */}
            <Image source={Logo} style={style.logo} />
          </View>
          <Text style={style.title}>{title}</Text>
          <Text style={style.body}>{body}</Text>
          <TouchableOpacity onPress={onHide} style={style.button}>
            <Text style={style.buttonTitle}>{buttonTitle}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
