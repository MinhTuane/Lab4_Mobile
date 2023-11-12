import 'react-native-gesture-handler';
import React from 'react';  
import store from './src/Store';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Contacts from './src/Contact';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

function ContactsScreens() {
  return (
    <Stack.Navigator
    initialRouteName='Contacts'
    screenOptions={
      {
        headerShown:true
      }
    }
    >
      <Stack.Screen name='Contacts' component={Contacts}
      options={{title: "Contacts"}}/>

    </Stack.Navigator>
  );
}
const Tab= createMaterialBottomTabNavigator();
const TabNavigator =()=>{
  return(
    <Tab.Navigator
    initialRouteName='ContactsScreens'
    barStyle={{backgroundColor: "blue"}}
    labeled={false}
    
    inactiveColor='#fff'
    >
      <Tab.Screen name='Contacts' component={ContactsScreens}
      options={{
        tabBarIcon:'format-list-bulleted',
      }}
      />
    </Tab.Navigator>
  );
}

const App=()=>{
  return(
    <Provider store={store}>
        <NavigationContainer>
          <TabNavigator/>
        </NavigationContainer>
    </Provider>
  )
}
export default App;