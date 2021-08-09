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
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader} from '../../components/AppHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export class Settings extends React.Component {
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
        <AppHeader title={'Settings'} />
        <View
          style={{
            height: h('84%'),
            // backgroundColor: 'green',
          }}>
          <View
            style={{
              height: '75%',
              //   backgroundColor: 'green',
            }}>
            <TouchableOpacity
              style={{
                height: '25%',
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderBottomColor: 'gray',
                borderBottomWidth: h('0.1%'),
              }}>
              <View
                style={{
                  width: '35%',
                  //   backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Avatar
                  size="large"
                  rounded
                  // title="MF"
                  containerStyle={{
                    backgroundColor: '#0004',
                  }}
                  source={require('../../assets/ladyDoctor.png')}
                />
              </View>
              <View
                style={{
                  width: '65%',
                  //   backgroundColor: 'pink',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('3%'),
                  }}>
                  Joan Diaz
                </Text>
                <Text>Medical Specialist</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '20%',
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderBottomColor: 'gray',
                borderBottomWidth: h('0.1%'),
              }}>
              <View
                style={{
                  width: '35%',
                  //   backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 28,
                    width: 25,
                  }}
                  source={require('../../assets/doctorIcon.png')}
                />
              </View>
              <View
                style={{
                  width: '65%',
                  //   backgroundColor: 'pink',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('3%'),
                  }}>
                  Doctor
                </Text>
                <Text>Select or update your doctor</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '20%',
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderBottomColor: 'gray',
                borderBottomWidth: h('0.1%'),
              }}>
              <View
                style={{
                  width: '35%',
                  //   backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 28,
                    width: 25,
                  }}
                  source={require('../../assets/password.png')}
                />
              </View>
              <View
                style={{
                  width: '65%',
                  //   backgroundColor: 'pink',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('3%'),
                  }}>
                  Reset Password
                </Text>
                <Text>Reset your password</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '20%',
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderBottomColor: 'gray',
                borderBottomWidth: h('0.1%'),
              }}>
              <View
                style={{
                  width: '35%',
                  //   backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 22,
                    width: 37,
                  }}
                  source={require('../../assets/termsCondition.png')}
                />
              </View>
              <View
                style={{
                  width: '65%',
                  //   backgroundColor: 'pink',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('3%'),
                  }}>
                  Terms & Conditions
                </Text>
                <Text>upon you are agreed</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '20%',
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderBottomColor: 'gray',
                borderBottomWidth: h('0.1%'),
              }}>
              <View
                style={{
                  width: '35%',
                  //   backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 28,
                    width: 32,
                  }}
                  source={require('../../assets/logOut.png')}
                />
              </View>
              <View
                style={{
                  width: '65%',
                  //   backgroundColor: 'pink',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('3%'),
                  }}>
                  Log Out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
