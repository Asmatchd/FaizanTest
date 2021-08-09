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
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader, AppBtn} from '../../components';

export class DoctorProfile extends React.Component {
  state = {
    data: [
      {
        date: '04/06/1968',
        reason: 'Flue',
      },
      {
        date: '04/06/1968',
        reason: 'Flue',
      },
      {
        date: '04/06/1968',
        reason: 'Flue',
      },
      {
        date: '04/06/1968',
        reason: 'Flue',
      },
    ],
    showHistory: false,
  };
  listDesign = item => (
    <TouchableOpacity
      style={{
        height: h('6%'),
        width: '90%',
        // backgroundColor: '#faf',
        borderWidth: w('0.5%'),
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginLeft: h('2.5%'),
        borderRadius: h('1.3%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: h('2.2%'),
          marginLeft: h('2%'),
        }}>
        {item.date}
      </Text>
      <Text
        style={{
          fontSize: h('2.2%'),
          marginRight: h('5%'),
        }}>
        {item.reason}
      </Text>
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
        <StatusBar backgroundColor={'#FBB03B'} />
        <AppHeader
          title={'Doctor'}
          leftIc={'chevron-back-outline'}
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
              source={require('../../assets/doctorProfile.png')}
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
            flex: 1,
            // backgroundColor: '#aaf',
          }}>
          <View
            style={{
              height: '15%',
              backgroundColor: '#5C47C4',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({showHistory: false});
              }}
              style={{
                height: '100%',
                width: '50%',
                // backgroundColor: '#afa',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: '#FBB03B',
                borderBottomWidth: this.state.showHistory === false ? 3 : 0,
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
                this.setState({showHistory: true});
              }}
              style={{
                height: '100%',
                width: '50%',
                // backgroundColor: '#aa0',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: 'orange',
                borderBottomWidth: this.state.showHistory === true ? 3 : 0,
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
          {this.state.showHistory === false ? (
            <View
              style={{
                height: '70%',
                // marginTop: h('3.5%'),
                padding: h('3%'),
              }}>
              <Text
                style={{
                  fontSize: h('2.4%'),
                }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical
              </Text>
            </View>
          ) : (
            <View
              style={{
                height: '70%',
                // backgroundColor: 'green',
              }}>
              <FlatList
                data={this.state.data}
                renderItem={({item}) => this.listDesign(item)}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => (
                  <View
                    style={{
                      height: h('5%'),
                      // backgroundColor: 'green',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: h('2.2%'),
                        marginLeft: h('4%'),
                      }}>
                      Appointment Date
                    </Text>
                    <Text
                      style={{
                        fontSize: h('2.2%'),
                        marginRight: h('6%'),
                      }}>
                      Reason
                    </Text>
                  </View>
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
          )}

          <AppBtn
            onPress={() => {
              this.props.navigation.navigate('AppointmentScreen');
            }}
            txt={'Book Know'}
          />
        </View>
      </View>
    );
  }
}
