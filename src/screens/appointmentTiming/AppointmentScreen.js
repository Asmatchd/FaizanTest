/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader} from '../../components/AppHeader';

export class AppointmentScreen extends React.Component {
  state = {
    data: [
      {
        text: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        id: '1',
      },
      {
        text: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        id: '2',
      },
      {
        text: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        id: '3',
      },
      {
        text: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        id: '4',
      },
      {
        text: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        id: '5',
      },
      {
        text: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        id: '6',
      },
    ],
  };
  design = item => {
    <TouchableOpacity
      style={{
        height: h('10%'),
        width: w('90%'),
        backgroundColor: '#faf',
        // marginRight: h('0.5%'),
        marginLeft: h('0.5%'),
        flexDirection: 'row',
      }}>
      <Text> Text: {item.text}</Text>
      <Text> Name: {item.name}</Text>
    </TouchableOpacity>;
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <StatusBar backgroundColor={'orange'} />
        <AppHeader
          title={'Book Appointment'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View
          style={{
            height: h('5%'),
            width: w('100%'),
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: h('2.5%'),
            }}>
            Select time from available Slots
          </Text>
        </View>

        <FlatList
          data={this.state.data}
          renderItem={item => this.design(item)}
          keyExtractor={(item, index) => item.id.toString()}
          ListHeaderComponent={() => (
            <Text style={{fontSize: h('2.5%')}}>FEB 25</Text>
          )}
        />
      </View>
    );
  }
}