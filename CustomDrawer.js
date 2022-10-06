import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{}}>
      <View
        style={{
          flex: 1,
          height: 200,
          backgroundColor: '#A569BD',
          marginTop: -5,
        }}>
        <ImageBackground
          source={require('../images/Background.png')}
          style={{padding: 20, height: 200}}>
          <Image
            source={require('../images/profile_1.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text style={{color: '#fff', fontSize: 18}}> User </Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: '#fff'}}> Rewards 345 coins </Text>
            <FontAwesome5 name="coins" size={14} color={'#fff'}></FontAwesome5>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
