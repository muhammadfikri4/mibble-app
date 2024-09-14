import React from 'react';
import {SVGPROPS} from './types';
import { Path, Svg } from 'react-native-svg';

export const HomeIcon: React.FC<SVGPROPS> = ({
  height = 35,
  width = 35,
  stroke = '#fff',
  ...rest
}) => {
  return (
    <>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 35 35"
        fill="none"
        {...rest}
        >
        <Path
          d="M9.71923 32.5496H4.61594C3.05012 32.5496 1.78077 31.2802 1.78077 29.7144V16.8641C1.78077 15.5646 2.37494 14.3364 3.39383 13.5298L13.8546 5.24834C15.917 3.61563 18.8314 3.61563 20.8938 5.24834L31.3545 13.5298C32.3734 14.3364 32.9676 15.5646 32.9676 16.8641V29.7144C32.9676 31.2802 31.6982 32.5496 30.1324 32.5496H25.0291C23.4633 32.5496 22.194 31.2802 22.194 29.7144V23.2864C22.194 22.0422 21.7128 20.8462 20.8511 19.9486C18.9542 17.9727 15.7941 17.9727 13.8973 19.9486C13.0356 20.8462 12.5544 22.0422 12.5544 23.2864V29.7144C12.5544 31.2802 11.2851 32.5496 9.71923 32.5496Z"
          stroke={stroke}
          stroke-width="2.83517"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};
