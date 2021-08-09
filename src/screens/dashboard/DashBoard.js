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
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader} from '../../components/AppHeader';
import Icon from 'react-native-vector-icons/Ionicons';

export class DashBoard extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <SafeAreaView />
        <StatusBar backgroundColor={'#FBB03B'} />
        <AppHeader title={'DashBoard'} />
        <View
          style={{
            marginTop: h('3%'),
            height: h('70%'),
            // backgroundColor: '#faf',
          }}>
          <View
            style={{
              height: '30%',
              // backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DoctorProfile');
              }}
              style={{
                height: '90%',
                width: '90%',
                // backgroundColor: 'pink',
                borderRadius: h('1%'),
                borderColor: '#5C47C4',
                borderWidth: w('0.3%'),
                alignItems: 'center',
                // justifyContent: 'space-evenly',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 55,
                  width: 60,
                  // backgroundColor: '#FBB03B',
                }}
                source={require('../../assets/doctorAppointmnt.png')}
              />
              <Text
                style={{
                  marginTop: h('1%'),
                  fontSize: h('2.3%'),
                }}>
                Get Doctor Appointment
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '30%',
              // backgroundColor: '#aff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('CartScreen');
              }}
              style={{
                height: '90%',
                width: '90%',
                // backgroundColor: 'pink',
                borderRadius: h('1%'),
                borderColor: '#5C47C4',
                borderWidth: w('0.3%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 50,
                  width: 55,
                }}
                source={require('../../assets/cart.png')}
              />

              <Text
                style={{
                  fontSize: h('2.3%'),
                  marginTop: h('1%'),
                }}>
                Go to Cart
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '30%',
              // backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: '90%',
                width: '90%',
                // backgroundColor: 'pink',
                borderRadius: h('1%'),
                borderColor: '#5C47C4',
                borderWidth: w('0.3%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 50,
                  width: 70,
                }}
                source={require('../../assets/waitingRoom.png')}
              />

              <Text
                style={{
                  marginTop: h('1%'),
                  fontSize: h('2.3%'),
                }}>
                Waiting Room
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
