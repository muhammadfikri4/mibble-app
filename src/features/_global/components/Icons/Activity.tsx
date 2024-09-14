import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {SVGPROPS} from './types';

export const ActivityIcon: React.FC<SVGPROPS> = ({
  width = 30,
  height = 30,
  stroke = '#000',
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
        d="M1.49512 13.8758C1.49512 20.0369 6.77104 26.1119 15.009 31.294C15.4664 31.5674 16.0103 31.8408 16.3797 31.8408C16.7627 31.8408 17.308 31.5674 17.7505 31.294C25.9871 26.1119 31.2644 20.0356 31.2644 13.8758C31.2644 8.59129 27.5364 4.90671 22.7016 4.90671C19.902 4.90671 17.7058 6.17261 16.3797 8.07415C15.0834 6.18877 12.8724 4.90671 10.0578 4.90671C5.23792 4.90671 1.49512 8.59129 1.49512 13.8758Z"
        stroke={stroke}
        stroke-width="2.83517"
      />
    </Svg>
  );
};
