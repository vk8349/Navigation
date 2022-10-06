import React from 'react';
import {Text, View, FlatList, ImageBackground, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BannerSlider from './component/BannerSlider';
import {sliderData} from './data';
import {windowWidth} from './Dimensions';

class Screen extends React.Component {
  renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  render() {
    return (
      <View style={{flex: 1, padding: 10, backgroundColor: '#000'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text> User </Text>
          <ImageBackground
            source={require('../images/profile_1.png')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 30,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 5,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 5,
            marginBottom:20,
          }}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={'#fff'}
            style={{width: '90%'}}
          />
          <Icon name={'search-outline'} size={25} color="#fff" />
        </View>
        <FlatList
          numColumns={2}
          data={sliderData}
          renderItem={({item, index}) => this.renderBanner({item, index})}
          sliderWidth={windowWidth}
          ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                    height: 50,
                    width: 20,
                    backgroundColor: "#000",
                    justifyContent: 'space-around',
                    }}
                />
            );
        }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Screen;
