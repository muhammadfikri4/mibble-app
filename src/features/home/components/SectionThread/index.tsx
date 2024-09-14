import {LoveIcon} from '@/features/_global/components/Icons/Love';
import React from 'react';
import {Text, View} from 'react-native';
import {sectionThreadStyle} from '../../style/section-thread.style';
import { DotHorizontal } from '@/features/_global/components/Icons/DotHorizontal';
import { formatTime } from '@/features/_global/helper/time';

interface SectionThreadProps {
  name: string;
  body: string;
  like?: number;
  comment?: number;
  time?: string | Date;
  show: boolean;
}

export const SectionThread: React.FC<SectionThreadProps> = ({
  name,
  body,
  like,
  time,
  show,
}) => {

  return (
    <View
      style={[
        sectionThreadStyle.section,
        sectionThreadStyle.subsection,
        show
          ? sectionThreadStyle['border-b-0-2']
          : sectionThreadStyle['border-b-0'],
        show
          ? sectionThreadStyle['margin-b-0']
          : sectionThreadStyle['margin-b-120'],
      ]}>
      <View style={sectionThreadStyle.profile} />
      <View style={sectionThreadStyle.threadContainer}>
        <View style={sectionThreadStyle.profileTime}>
          <Text style={sectionThreadStyle.profileName}>{name}</Text>
          <View style={sectionThreadStyle.timeContainer}>
            <Text style={sectionThreadStyle.time}>
              {formatTime(time as Date)}
            </Text>
            <DotHorizontal strokeWidth={0.3} width={15} height={15} />
          </View>
        </View>
        <Text style={sectionThreadStyle.threadBody}>{body}</Text>
        <View style={sectionThreadStyle.activtyContainer}>
          <LoveIcon width={17} height={17} strokeWidth={2} stroke={'#000'} />
          <Text style={sectionThreadStyle.activityText}>{like}</Text>
        </View>
      </View>
    </View>
  );
};
