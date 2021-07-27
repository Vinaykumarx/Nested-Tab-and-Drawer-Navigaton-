import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/homescreen';
import drawerscrn from './components/drawerscrn';
import SettingsScreen from './components/login';
// import { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <NavigationContainer>
       <Drawer.Navigator  style={styles.container}>
              <Drawer.Screen name="DrawerScreen" component={drawerscrn} />
              <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
              <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
       </Drawer.Navigator>
      </NavigationContainer>
    );
  }
 
}

const styles =StyleSheet.create({
  container:{
    // alignItems:'center'
    // justifyContent:'center'
  }
})