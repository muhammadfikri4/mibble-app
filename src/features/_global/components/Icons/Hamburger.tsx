import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {SVGPROPS} from './types';

export const HamburgerIcon: React.FC<SVGPROPS> = ({
  width = 30,
  height = 30,
  stroke = '#000',
  ...rest
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 213 169"
      fill="none"
      {...rest}>
      <Path
        d="M8.69437 8.23401H204.757"
        stroke={stroke}
        stroke-width="16.3385"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.69437 84.4805H204.757"
        stroke={stroke}
        stroke-width="16.3385"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.69437 160.727H204.757"
        stroke={stroke}
        stroke-width="16.3385"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
