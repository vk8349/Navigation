import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

class Home extends React.Component {
  state = {
    dataSource: [
      'Order History',
      'Track Order',
      'Payment',
      'Chat',
      'Contact Us',
      'About Us',
      'Sell with Us',
      'Logout',
    ],
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#2f4e43', padding: 10}}>
        
        <View style={styles.rowStyle}>
          <TouchableOpacity
            onPress={() => {
              console.log('Hello');
              this.props.navigation.navigate('Dashboard');
            }}>
            <View style={{...styles.boxStyle, backgroundColor: '#D7BDE2'}}>
              {<Icon name="layers" size={25} color="#000" />}
              <Text style={styles.textStyle}>Dashboard</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Hello');
              this.props.navigation.navigate('Profile');
            }}>
            <View style={{...styles.boxStyle, backgroundColor: '#F6DDCC'}}>
              {<Icon name="person" size={25} color="#000" />}
              <Text style={styles.textStyle}>profile</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowStyle}>
          <TouchableOpacity
            onPress={() => {
              console.log('Hello');
              this.props.navigation.navigate('Account details');
            }}>
            <View style={{...styles.boxStyle, backgroundColor: '#EDBB99'}}>
              {<Icon name="ribbon" size={25} color="#000" />}
              <Text style={styles.textStyle}>Account details</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Hello');
              this.props.navigation.navigate('Cart');
            }}>
            <View style={{...styles.boxStyle, backgroundColor: '#A2D9CE'}}>
              {<Icon name="cart" size={25} color="#000" />}
              <Text style={styles.textStyle}> Cart </Text>
            </View>
          </TouchableOpacity>
          
        </View>

        <View style={styles.cardStyle}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item, index}) => (
              <Text style={styles.textStyle}>
                {index + 1}. {item}
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 15,
    color: '#000',
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  titleStyle: {
    fontSize: 30,
    color: '#fff',
    margin: 10,
    fontWeight: 'bold',
  },
  boxStyle: {
    width: width / 2 - 20,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#000',
    marginLeft: 10,
    marginTop: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  cardStyle: {
    width: width - 30,
    alignItems: 'center',
    backgroundColor: '#ABB2B9',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
};

export default Home;
