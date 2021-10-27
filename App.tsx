import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Info from './Information';

const Feed = () => {
  return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'#2c73f7', fontSize: 28, fontWeight:'500'}}>Feed Screen</Text>
    </View>
   
  );
}

const Article =() => {
  return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'#2c73f7', fontSize: 28, fontWeight:'500'}}>Article Screen</Text>
    </View>
  );
}

// ======Demo Drawer=====
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

// =====Demo TopTab=====
const Tab = createMaterialTopTabNavigator();
function MyMaterialTopTabNavigator() {
  return (
      <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Article" component={Article} />
    </Tab.Navigator>
  );
}

// ====Demo BottomTab====
const BTab = createBottomTabNavigator();
function MyBottomTabNavigator() {
  return (
    <BTab.Navigator initialRouteName="Information">
       <BTab.Screen name="Information" component={Info} options={{headerShown:false}} />
      <BTab.Screen name="Feed" component={Feed} />
      <BTab.Screen name="Article" component={Article} />
    </BTab.Navigator>
  );
}

const App = () => {
  return (

    <View style={{flex: 1, marginTop: 30}}>
    <NavigationContainer>
       {/* ======DEMO DRAWER==== */}
       {/* <MyDrawer /> */}

       {/* ====DEMO TOP TAB NAVIGATOR */}
       {/* <MyMaterialTopTabNavigator /> */}

       {/* ====DEMO BOTTOM TAB NAVIGATOR */}
       <MyBottomTabNavigator />

     </NavigationContainer>

    </View>
     
    
  );
};
export default App;


