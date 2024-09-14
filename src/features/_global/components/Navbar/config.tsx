/* eslint-disable react/react-in-jsx-scope */
import {ActivityIcon} from '../Icons/Activity';
import {HomeIcon} from '../Icons/Home';
import {ProfileIcon} from '../Icons/Profile';
import {ThreadIcon} from '../Icons/Thread';
import {SVGPROPS} from '../Icons/types';

export type Names = 'Home' | 'Threads' | 'Activity' | 'Profile';
export interface MenuItem {
  icon: React.FC<SVGPROPS>;
  name: Names;
  to: string;
  isActive: boolean;
}

export const menus: MenuItem[] = [
  {
    icon: ({...rest}: SVGPROPS) => <HomeIcon {...rest} />,
    name: 'Home',
    to: 'home-screen',
    isActive: true,
  },
  {
    icon: ({...rest}: SVGPROPS) => <ThreadIcon {...rest} />,
    name: 'Threads',
    to: 'thread-screen',
    isActive: false,
  },
  {
    icon: ({...rest}: SVGPROPS) => <ActivityIcon {...rest} />,
    name: 'Activity',
    to: 'activity-screen',
    isActive: false,
  },
  {
    icon: ({...rest}: SVGPROPS) => <ProfileIcon {...rest} />,
    name: 'Profile',
    to: 'profile-screen',
    isActive: false,
  },
];
