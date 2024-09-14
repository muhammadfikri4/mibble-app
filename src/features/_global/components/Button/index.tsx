import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IGloButton, returnSize, returnVariant, style} from './config';

export const GloButton: React.FC<IGloButton> = ({
  title,
  size = 'md',
  variant = 'black',
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[{...returnSize(size), ...returnVariant(variant)}, rest.style]}
      {...rest}>
      <Text
        style={[
          style.textAlignCenter,
          {...style.colorWhite, fontWeight: style.headerTitle.fontWeight},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
