/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
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
import {AppBtn} from '../../components/AppBtn';

export class History extends React.Component {
  state = {
    data: [
      {
        date: '04/06/1968',
        disease: 'flue',
        id: '1',
      },
      {
        date: '04/06/1968',
        disease: 'flue',
        id: '2',
      },
      {
        date: '04/06/1968',
        disease: 'flue',
        id: '3',
      },
    ],
  };
  design = item => (
    <TouchableOpacity
      style={{
        height: h('8%'),
        width: w('90%'),
        marginLeft: h('3%'),
        marginTop: h('2%'),
        // backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: h('2.5%'),
        borderWidth: w('0.5%'),
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
      }}>
      <View
        style={{
          height: '100%',
          width: '40%',
          // backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Date: {item.date}</Text>
      </View>
      <View
        style={{
          height: '100%',
          width: '40%',
          // backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Reason: {item.disease}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
          //   backgroundColor: '#faf',
        }}>
        <SafeAreaView />
        <StatusBar backgroundColor={'orange'} />
        <AppHeader
          title={'History'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <FlatList
          data={this.state.data}
          renderItem={item => this.design(item)}
          keyExtractor={(item, index) => item.id.toString()}
          ListHeaderComponent={() => (
            <View
              style={{
                height: h('5%'),
                // backgroundColor: '#aaf',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginLeft: h('8%'),
                }}>
                Appointment Date
              </Text>
              <Text
                style={{
                  marginRight: h('8%'),
                }}>
                Reason
              </Text>
            </View>
          )}
          ListFooterComponent={() => (
            <AppBtn
              onPress={() => {
                this.props.navigation.navigate('AppointmentScreen');
              }}
              st={{marginTop: h('2%')}}
              txt={'Book Now'}
            />
          )}
        />
      </View>
    );
  }
}
