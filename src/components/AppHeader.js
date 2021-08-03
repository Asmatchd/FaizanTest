/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          height: h('6%'),
          backgroundColor: 'blue',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPressed}
          style={{
            height: h('6%'),
            width: w('15%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={this.props.leftIc} size={h('4%')} color={'white'} />
        </TouchableOpacity>
        <View
          style={{
            height: h('6%'),
            width: w('70%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: h('3%'),
            }}>
            {this.props.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.props.rightPressed}
          style={{
            height: h('6%'),
            width: w('15%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={this.props.rightIc} size={h('4%')} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  }
}
