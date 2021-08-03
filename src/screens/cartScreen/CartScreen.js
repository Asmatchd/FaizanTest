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
import Entypo from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader} from '../../components/AppHeader';
import {AppBtn} from '../../components/AppBtn';

export class CartScreen extends React.Component {
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
          title={'Your Cart'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View
          style={{
            height: h('91%'),
            // backgroundColor: '#faf',
          }}>
          {/* Top View */}
          <View
            style={{
              height: '30%',
              // backgroundColor: '#aaf',
              borderTopColor: 'rgba(0,0,0,0.10)',
              borderTopWidth: w('0.6%'),
              borderBottomColor: 'rgba(0,0,0,0.07)',
              borderBottomWidth: w('0.6%'),
              padding: h('2%'),
            }}>
            <View
              style={{
                height: '20%',
                // backgroundColor: 'green',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Entypo name={'circle-with-minus'} color={'blue'} size={20} />
                <Text style={{fontSize: h('2.5%')}}>1</Text>
                <Icon name={'md-add-circle-sharp'} color={'blue'} size={20} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  // backgroundColor: '#aaf',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%')}}>Chicken tikka piece</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%'), color: 'gray'}}>
                  Rs:160.00
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '20%',
                // backgroundColor: 'green',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Entypo name={'circle-with-minus'} color={'blue'} size={20} />
                <Text style={{fontSize: h('2.5%')}}>1</Text>
                <Icon name={'md-add-circle-sharp'} color={'blue'} size={20} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  // backgroundColor: '#aaf',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%')}}>Chicken Shawarma</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%'), color: 'gray'}}>
                  Rs:80.00
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '20%',
                // backgroundColor: 'green',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Entypo name={'circle-with-minus'} color={'blue'} size={20} />
                <Text style={{fontSize: h('2.5%')}}>2</Text>
                <Icon name={'md-add-circle-sharp'} color={'blue'} size={20} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  // backgroundColor: '#aaf',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%')}}>Beef Kibab</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%'), color: 'gray'}}>
                  Rs:200.00
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '20%',
                // backgroundColor: 'green',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Entypo name={'circle-with-minus'} color={'blue'} size={20} />
                <Text style={{fontSize: h('2.5%')}}>1</Text>
                <Icon name={'md-add-circle-sharp'} color={'blue'} size={20} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  // backgroundColor: '#aaf',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%')}}>Chicken Malai Boti</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%'), color: 'gray'}}>
                  Rs:260.00
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '20%',
                // backgroundColor: 'green',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Entypo name={'circle-with-minus'} color={'blue'} size={20} />
                <Text style={{fontSize: h('2.5%')}}>1</Text>
                <Icon name={'md-add-circle-sharp'} color={'blue'} size={20} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  // backgroundColor: '#aaf',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%')}}>Chicken Burger</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  // backgroundColor: '#faf',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: h('2.5%'), color: 'gray'}}>
                  Rs:120.00
                </Text>
              </View>
            </View>
          </View>
          {/* Center View */}
          <View
            style={{
              height: '25%',
              // backgroundColor: '#aff',
            }}>
            <View
              style={{
                height: '20%',
                // backgroundColor: '#faf',
                marginTop: h('6%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: h('2.5%'), marginLeft: w('2%')}}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: h('2.5%'),
                  color: 'gray',
                  marginRight: w('2%'),
                }}>
                Rs:160.00
              </Text>
            </View>
            <View
              style={{
                height: '20%',
                // backgroundColor: '#aaf',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: h('2.5%'), marginLeft: w('2%')}}>
                Delivery Fee
              </Text>
              <Text
                style={{
                  fontSize: h('2.5%'),
                  color: 'gray',
                  marginRight: w('2%'),
                }}>
                Rs:160.00
              </Text>
            </View>
            <View
              style={{
                height: '20%',
                // backgroundColor: '#aaf',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopColor: 'rgba(0,0,0,0.07)',
                borderTopWidth: w('0.6%'),
                borderBottomColor: 'rgba(0,0,0,0.07)',
                borderBottomWidth: w('0.6%'),
              }}>
              <Text style={{fontSize: h('2.5%'), marginLeft: w('2%')}}>
                Total (Inc. Gst)
              </Text>
              <Text
                style={{
                  fontSize: h('2.5%'),
                  color: 'gray',
                  marginRight: w('2%'),
                }}>
                Rs:1600.00
              </Text>
            </View>
          </View>
          {/* Bottom View */}
          <View
            style={{
              height: '30%',
              // backgroundColor: '#ffa',
              borderTopColor: 'rgba(0,0,0,0.07)',
              borderTopWidth: w('0.6%'),
              borderBottomColor: 'rgba(0,0,0,0.07)',
              borderBottomWidth: w('0.6%'),
            }}>
            <TouchableOpacity
              style={{
                height: '20%',
                // backgroundColor: '#faf',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text style={{fontSize: h('2.5%')}}>Contact Details</Text>
              <Text
                style={{
                  fontSize: h('2.5%'),
                  color: 'gray',
                }}>
                sheikhasadde@gmail.com
              </Text>
              <Icon name={'arrow-forward'} color={'blue'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '60%',
                // backgroundColor: '#aaf',
              }}>
              <View
                style={{
                  height: '50%',
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <View
                  style={{
                    width: '30%',
                    marginLeft: w('2%'),
                  }}>
                  <Text style={{fontSize: h('2.5%')}}>Delivery Details</Text>
                </View>
                <View
                  style={{
                    width: '30%',
                  }}>
                  <Text
                    style={{
                      fontSize: h('2.5%'),
                      color: 'gray',
                      marginLeft: w('1%'),
                    }}>
                    Home
                  </Text>
                </View>
                <View
                  style={{
                    width: '30%',
                  }}>
                  <Icon
                    style={{
                      marginLeft: w('21.5%'),
                    }}
                    name={'arrow-forward'}
                    color={'blue'}
                    size={25}
                  />
                </View>
              </View>
              <View
                style={{
                  height: '50%',
                  // backgroundColor: '#aaf',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2.5%'),
                    color: 'gray',
                    marginLeft: w('4%'),
                  }}>
                  Street address, house#, colony
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: '20%',
                // backgroundColor: '#faf',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: h('2.5%'), marginLeft: w('4%')}}>
                Delivery time
              </Text>
              <Text
                style={{
                  fontSize: h('2.5%'),
                  color: 'gray',
                  marginLeft: w('10%'),
                }}>
                20 min
              </Text>
            </View>
          </View>
          <AppBtn st={{marginTop: h('4.5%')}} txt={'Order Now'} />
        </View>
      </View>
    );
  }
}
