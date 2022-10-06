import React from 'react';
import {View, Text} from 'react-native';


class Cart extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#030528'}}>
        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Current subscription</Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>items in cart</Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>previous order details</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  tilestyle: {
    flexDirection: 'column',
    width: 390,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#A2D9CE',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    size: 40,
  },
  flexStyle: {
    flexDirection: 'column',
  },
  textStyle: {
    fontweight: 'bold',
    color: '#000',
  },
};
export default Cart;
