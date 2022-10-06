import React from 'react';
import {View, Text} from 'react-native';
import TabNavigator from './Bottomtab';

class Profile extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#1d3478'}}>
        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Change mobile no</Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Wallet details</Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Bank Details</Text>
          </View>

          <View style={styles.flexStyle}>
            <View style={styles.tilestyle}>
              <Text style={styles.textStyle}> Logout </Text>
            </View>
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
    backgroundColor: '#F6DDCC',
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

export default Profile;
