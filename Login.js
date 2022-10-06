import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends React.Component {

  state = {
    userName: '',
    password: '',
    showPassword: false,
  };

  saveUserName = async (text) => {
    try {
      AsyncStorage.setItem("appData", text);
      // AsyncStorage.removeItem("appData");
      // AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  getUserName = async ()=>{
    try{
      const userName = await AsyncStorage.getItem('appData');
      this.setState({userName});
    }catch (error) {}
  };

  // React.useEffect(() => {
  //   getName();
  // }, []);

  componentDidMount () {
    this.getUserName();
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={{fontSize: 40, color: '#000', margin: 10}}>
          Login screen
        </Text>
        <TextInput
          placeholder="User Name"
          placeholderTextColor={'#000'}
          style={{fontSize: 15, color: '#000', width: '70%', margin: 10}}
          underlineColorAndroid="#000"
          value={this.state.userName}
          onChangeText={text => {
            this.setState({userName: text});
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <TextInput
            secureTextEntry={!this.state.showPassword}
            placeholder="Password"
            placeholderTextColor={'#000'}
            style={{fontSize: 15, color: '#000', width: '65%'}}
            underlineColorAndroid="#000"
            value={this.state.password}
            onChangeText={text => {
              this.setState({password: text});
            }}
          />
          <TouchableOpacity
            onPress={() =>
              this.setState({showPassword: !this.state.showPassword})
            }>
            <Icon
              name={this.state.showPassword ? 'eye' : 'eye-off'}
              size={25}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#36b9ff',
            borderRadius: 10,
            margin: 10,
          }}
          onPress={() => {
            if (
              this.state.userName == 'a' &&
              this.state.password == 's'
            ) {
              this.saveUserName(this.state.userName);
              this.props.navigation.navigate('Home');
            } else {
              alert('Please enter valid credentials');
            }
          }}>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    bacgoroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
