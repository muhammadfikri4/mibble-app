import React from 'react';
import {ScrollView, View} from 'react-native';
import {threads} from '../constant';
import {homeContentStyle} from '../style/home-content.style';
import {SectionThread} from './SectionThread';

export const HomeContent = () => {
  return (
    <View style={homeContentStyle.container}>
      <ScrollView>
        <View style={homeContentStyle.sectionContainer}>
          {threads.map((item, index) => (
            <SectionThread
              key={index}
              show={index + 1 === threads.length ? false : true}
              name={item.name}
              like={item.like}
              body={item.body}
              time={item.time}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
