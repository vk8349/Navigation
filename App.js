import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';


import CustomDrawer from './CustomDrawer';
import Home from './Home';
import Login from './Login';
// import Dashboard from './Dashboard';
// import Profile from './Profile';
// import Accountdetails from './Accountdetails'
// import Cart from './Cart';
import Screen from './Screen';
import Bottomtab from './Bottomtab';



import Ionicons from 'react-native-vector-icons/Ionicons';
const AppStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor:'#333', 
        drawerLabelStyle: {marginLeft: -25},
        fontSize:15
      }}>
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="log-in-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Dashboard" component={Dashboard} options /> */}
      <Drawer.Screen
        name="Dashboard"
        component={Bottomtab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="layers" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Profile" component={Profile} options /> */}
      <Drawer.Screen
        name="Profile"
        component={Bottomtab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Accountdetails" component={Accountdetails} options /> */}
      <Drawer.Screen
        name="Accountdetails"
        component={Bottomtab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ribbon" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Cart" component={Cart} options /> */}
      <Drawer.Screen
        name="Cart"
        component={Bottomtab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Login}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="log-out-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Screen"
        component={Screen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="tablet-landscape-outline" size={22} color={color} />
          ),
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: 'white',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Bottomtab"
        component={Bottomtab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="tablet-landscape-outline" size={22} color={color} />
          ),
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: 'white',
          headerShown: false,
        }}
      // />
      // <Drawer.Screen
      //   name="Grid"
      //   component={Screen}
      //   options={{
      //     drawerIcon: ({color}) => (
      //       <Ionicons name="list-circle-outline" size={22} color={color} />
      //     ),
      //     headerStyle: {backgroundColor: '#505BEA'},
      //     headerTintColor: 'white',
        
      //   }}
        />

    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="DrawerNavigator"
          options={{headerShown: false}}
          component={DrawerNavigator}
        />
        {/* <AppStack.Screen
          name="Login"
          component={Login}
          options={{
            title: ' Login',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: 'white',
          }}
        />
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: 'white',
          }}
        />
        <AppStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerTitleAlign: 'left',
            headerStyle: {backgroundColor: '#D7BDE2'},
            headerTintColor: '#000',
          }}
        />
        <AppStack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerTitleAlign: 'left',
            headerStyle: {backgroundColor: '#F6DDCC'},
            headerTintColor: '#000',
          }}
        />
        <AppStack.Screen
          name="Account details"
          component={Accountdetails}
          options={{
            title: 'Account details',
            headerTitleAlign: 'left',
            headerStyle: {backgroundColor: '#EDBB99'},
            headerTintColor: '#000',
          }}
        />
        <AppStack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
            headerTitleAlign: 'left',
            headerStyle: {backgroundColor: '#A2D9CE'},
            headerTintColor: '#000',
          }}
        /> 
        */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
