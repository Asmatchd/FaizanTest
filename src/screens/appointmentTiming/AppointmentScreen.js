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
        time: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        count: '1',
        color: 'orange',
      },
      {
        time: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        count: '2',
      },
      {
        time: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        count: '3',
      },
      {
        time: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        count: '4',
      },
      {
        time: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        count: '5',
      },
      {
        time: '8:00 AM - 9:00 AM',
        name: 'Faizan',
        count: '6',
      },
    ],
  };

  design = item => (
    <TouchableOpacity
      style={{
        height: h('10%'),
        width: '95%',
        // backgroundColor: 'green',
        borderWidth: w('0.5%'),
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginLeft: h('1.5%'),
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: '100%',
          width: '1%',
          backgroundColor: '#5C47C4',
        }}></View>
      <View
        style={{
          height: '100%',
          width: '15%',
          // backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name={'ios-person-outline'} color={'#5C47C4'} size={25} />
        <Text>{item.count}</Text>
      </View>
      <View
        style={{
          height: '100%',
          width: '70%',
          // backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: h('2.8%'),
          }}>
          {item.time}
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          width: '15%',
          // backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name={'chevron-forward'} color={'#5C47C4'} size={30} />
      </View>
    </TouchableOpacity>
  );
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
          leftIc={'chevron-back-outline'}
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
          renderItem={({item}) => this.design(item)}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <Text style={{fontSize: h('2.5%')}}>FEB 25</Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: h('1%'),
              }}
            />
          )}
        />
      </View>
    );
  }
}
