/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppBtn extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          {...this.props}
          style={[
            {
              width: '70%',
              height: h('6%'),
              backgroundColor: '#FBB03B',
              borderRadius: h('2%'),
              alignItems: 'center',
              justifyContent: 'center',
            },
            this.props.st,
          ]}>
          <Text
            style={{
              color: 'white',
              fontSize: h('3%'),
            }}>
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
