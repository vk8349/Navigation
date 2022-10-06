import React from 'react';
import {View, Text} from 'react-native';

class Accountdetails extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#b84646'}}>
        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Number of users </Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Number of tracking device</Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Devices connected</Text>
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
    backgroundColor: '#EDBB99',
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
export default Accountdetails;
