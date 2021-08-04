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
        <StatusBar backgroundColor={'orange'} />
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
                borderColor: 'blue',
                borderWidth: w('0.3%'),
                alignItems: 'center',
                // justifyContent: 'space-evenly',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 70,
                  width: 70,
                }}
                source={require('../../assets/medical.png')}
              />
              <Text
                style={{
                  marginTop: h('1%'),
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
                borderColor: 'blue',
                borderWidth: w('0.3%'),
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  height: '60%',
                  width: '30%',
                  // backgroundColor: '#faf',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 70,
                    width: 70,
                  }}
                  source={require('../../assets/shopping-cart.png')}
                />
              </View>
              <Text>Go to Cart</Text>
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
                borderColor: 'blue',
                borderWidth: w('0.3%'),
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  height: '60%',
                  width: '30%',
                  // backgroundColor: '#faf',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 70,
                    width: 70,
                  }}
                  source={require('../../assets/waiting-room.png')}
                />
              </View>
              <View
                style={
                  {
                    // height: '40%',
                    // width: '30%',
                    // backgroundColor: '#aaf',
                  }
                }>
                <Text>Waiting Room</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
