import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {SVGPROPS} from './types';

export const ThreadIcon: React.FC<SVGPROPS> = ({
  height = 35,
  width = 35,
  stroke = '#fff',
  ...rest
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      {...rest}>
      <Path
        d="M29.5665 5.61552L18.2259 16.9562M16.8083 4.19794H11.8467C7.14928 4.19794 3.34125 8.00598 3.34125 12.7034V23.3353C3.34125 28.0328 7.14929 31.8408 11.8467 31.8408H22.4786C27.1761 31.8408 30.9841 28.0328 30.9841 23.3353V18.3738"
        stroke={stroke}
        stroke-width="2.83517"
        stroke-linecap="round"
      />
    </Svg>
  );
};
