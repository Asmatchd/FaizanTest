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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader} from '../../components/AppHeader';
import {AppBtn} from '../../components/AppBtn';

export class CartScreen extends React.Component {
  state = {
    data: [
      {
        count: '1',
        recipe: 'Chiken tikka piece',
        price: 'Rs:160:00',
      },
      {
        count: '1',
        recipe: 'Chiken Shawarma',
        price: 'Rs:80:00',
      },
      {
        count: '2',
        recipe: 'Beef Kibab',
        price: 'Rs:200:00',
      },
      {
        count: '1',
        recipe: 'Chiken Malai boti',
        price: 'Rs:260:00',
      },
      {
        count: '1',
        recipe: 'Chiken Burger',
        price: 'Rs:120:00',
      },
    ],
  };
  listDesign = item => (
    <View
      style={{
        height: h('5%'),
        width: w('95%'),
        // backgroundColor: '#faf',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: '100%',
          width: '25%',
          // backgroundColor: '#ffa',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <AntDesign name={'minussquare'} color={'#FD5867'} size={20} />
        <Text>{item.count}</Text>
        <AntDesign name={'plussquare'} color={'#FD5867'} size={20} />
      </View>
      <View
        style={{
          height: '100%',
          width: '50%',
          // backgroundColor: '#afa',
          // alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: h('2.5%'),
            marginLeft: h('1%'),
          }}>
          {item.recipe}
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          width: '25%',
          // backgroundColor: '#ffa',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: h('2.5%'),
            color: 'gray',
          }}>
          {item.price}
        </Text>
      </View>
    </View>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <SafeAreaView />
        <StatusBar backgroundColor={'silver'} />
        <AppHeader
          stle={{backgroundColor: '#fff'}}
          title={'Your Cart'}
          leftIc={'chevron-back-outline'}
          icSt={{color: '#FD5867'}}
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
              height: '35%',
              // backgroundColor: '#aaf',
              borderTopColor: 'rgba(0,0,0,0.10)',
              borderTopWidth: w('0.6%'),
              borderBottomColor: 'rgba(0,0,0,0.07)',
              borderBottomWidth: w('0.6%'),
              padding: h('2%'),
            }}>
            <FlatList
              data={this.state.data}
              renderItem={({item}) => this.listDesign(item)}
              keyExtractor={(item, index) => index.toString()}
            />
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
                  // color: 'gray',
                  marginRight: w('2%'),
                }}>
                Rs:1600.00
              </Text>
            </View>
          </View>
          {/* Bottom View */}
          <View
            style={{
              height: '25%',
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
              <Icon name={'chevron-forward'} color={'#FD5867'} size={30} />
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
                      marginLeft: w('20.5%'),
                    }}
                    name={'chevron-forward'}
                    color={'#FD5867'}
                    size={30}
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
          <AppBtn
            st={{
              marginTop: h('4.5%'),
              backgroundColor: '#FD5867',
              borderRadius: h('0'),
            }}
            txt={'Order Now'}
          />
        </View>
      </View>
    );
  }
}
