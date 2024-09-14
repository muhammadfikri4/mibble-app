import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGPROPS } from './types';

export const ProfileIcon: React.FC<SVGPROPS> = ({
  width = 30,
  height = 30,
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
        d="M23.6847 9.86826C23.6847 13.1956 20.9874 15.893 17.66 15.893C14.3326 15.893 11.6353 13.1956 11.6353 9.86826C11.6353 6.5409 14.3326 3.84354 17.66 3.84354C20.9874 3.84354 23.6847 6.5409 23.6847 9.86826Z"
        stroke={stroke}
        stroke-width="2.83517"
        stroke-linecap="round"
      />
      <Path
        d="M28.8082 33.2584H6.51192C5.01077 33.2584 3.78837 32.0768 4.08789 30.6059C4.81031 27.0581 7.53645 21.2089 17.6601 21.2089C27.7837 21.2089 30.5098 27.0581 31.2322 30.6059C31.5318 32.0768 30.3094 33.2584 28.8082 33.2584Z"
        stroke={stroke}
        stroke-width="2.83517"
        stroke-linecap="round"
      />
    </Svg>
  );
};
