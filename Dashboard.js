import React from 'react';
import {View, Text} from 'react-native';
import Bottomtab from './Profile';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#2471A3'}}>
        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>No of steps</Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Calories burn</Text>
          </View>
        </View>

        <View style={styles.flexStyle}>
          <View style={styles.tilestyle}>
            <Text style={styles.textStyle}>Water intake</Text>
          </View>

          <View style={styles.flexStyle}>
            <View style={styles.tilestyle}>
              <Text style={styles.textStyle}> Fat burn </Text>
            </View>
          </View>

          <View style={styles.flexStyle}>
            <View style={styles.tilestyle}>
              <Text style={styles.textStyle}> Protine intake </Text>
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
    backgroundColor: '#D7BDE2',
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

export default Dashboard;
