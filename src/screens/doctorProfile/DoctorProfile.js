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
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader, AppBtn} from '../../components';

export class DoctorProfile extends React.Component {
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
          title={'Doctor'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        {/* Top View */}
        <View
          style={{
            height: h('40%'),
            // backgroundColor: '#faf',
            alignItems: 'center',
            // justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: '55%',
              width: '50%',
              // backgroundColor: 'green',
              marginTop: h('2%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Avatar
              size="xlarge"
              rounded
              // title="MF"
              containerStyle={{
                backgroundColor: '#0004',
              }}
              source={require('../../assets/doctor-profile.jpg')}
            />
          </View>
          <View
            style={{
              height: '10%',
              width: '50%',
              // backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: h('2%'),
            }}>
            <Text
              style={{
                // fontWeight: 'bold',
                fontSize: h('2.9%'),
              }}>
              Dr. Testing Name
            </Text>
          </View>
          <View
            style={{
              height: '9%',
              width: '15%',
              // backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Location</Text>
          </View>
          <View
            style={{
              height: '8%',
              width: '15%',
              // backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>MBBS</Text>
          </View>
        </View>
        {/* Bottom View */}
        <View
          style={{
            height: h('51%'),
            // backgroundColor: '#aaf',
          }}>
          <View
            style={{
              height: '15%',
              backgroundColor: 'blue',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '50%',
                // backgroundColor: '#afa',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  color: 'white',
                }}>
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('History');
              }}
              style={{
                height: '100%',
                width: '50%',
                // backgroundColor: '#aa0',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  color: 'white',
                }}>
                Visit History
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '60%',
              // marginTop: h('3.5%'),
              padding: h('3%'),
            }}>
            <Text
              style={{
                fontSize: h('2.4%'),
              }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
            </Text>
          </View>
          <View
            style={{
              height: '30%',
              // backgroundColor: 'gray',
            }}>
            <AppBtn
              onPress={() => {
                this.props.navigation.navigate('AppointmentScreen');
              }}
              txt={'Book Know'}
            />
          </View>
        </View>
      </View>
    );
  }
}
