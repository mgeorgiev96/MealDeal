import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/Login'
import SignupScreen from '../screens/Signup'
import AppScreen from '../screens/AppScreen'
import Logout from '../screens/Logout'
import Cart from '../screens/Cart'
import Orders from '../screens/Orders'
import {connect} from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import {SafeAreaView} from 'react-native'

const Drawer = createDrawerNavigator();

const DrawerItem = (icon,title,component)=>{
  return <Drawer.Screen name={title} component={component}
  options={{
    title,
    drawerIcon: () => (
         <MaterialIcons name={icon} size={24} color={"#000"} />
    ),
  }}
/>
}
function Navigator(props) {

  return (
    <NavigationContainer>

        <Drawer.Navigator  initialRouteName="Home"
            drawerContentOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'black',
              activeBackgroundColor: 'orange',
              labelStyle:{
                fontWeight: 'bold',
              }
            }}>
              

          {!props.food.session ?  DrawerItem("home","Login",LoginScreen) : null}
          {!props.food.session ?  DrawerItem("switch-account","Sign up",SignupScreen) : null}
          {props.food.session ?  DrawerItem("restaurant-menu","Menu",AppScreen) : null}
          {props.food.session ?  DrawerItem("shopping-cart","Cart",Cart) : null}
          {props.food.session && props.food.activeOrder < 50 ?  DrawerItem("motorcycle","Order",Orders) : null}
          {props.food.session ?  DrawerItem("logout","Logout",Logout) : null}
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = state=>{
  return {
    food : state.food
  }
}

export default connect(mapStateToProps)(Navigator)