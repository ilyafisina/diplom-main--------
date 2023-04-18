import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './assets/screens/login';
import Signup from './assets/screens/signup';
import HomeScreen from './assets/screens/news';
import CategoriesScreen from './assets/screens/catalog';
import ContactScreen from './assets/screens/contact';
import DrawerContainer from './assets/screens/DrawerContainer/DrawerContainer';
import AuthScreen from './assets/screens/auth';
import CoffeScreen from './assets/screens/coffe';
import LoginScreen from './assets/screens/login';
import SignupScreen from './assets/screens/signup'
import Dashboard from './assets/screens/dashboard';
import ResetPassword from './assets/screens/ResetPassword'
import Welcome from './assets/screens/welcome';
import Card from './assets/screens/card'




const Stack = createStackNavigator();

function MyStack(route) {
  
  return (
    
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ title: 'Welcome',headerShown: false,headerBackTitleVisible: false }}
      />   
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup',headerShown: false,headerBackTitleVisible: false }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login',headerLeft: null, headerBackTitleVisible: false,headerShown: false}}
      />
      <Stack.Screen 
       name="ГЛАВНАЯ" 
       component={HomeScreen} 
       options={
         { title: 'ГЛАВНАЯ' }}
      />
      <Stack.Screen name='КОФЕ' component={CoffeScreen}/>
      <Stack.Screen name='КОНТАКТЫ' component={ContactScreen}/>
      <Stack.Screen name='КАТАЛОГ' component={CategoriesScreen}/>
      <Stack.Screen name='ВЫХОД' component={Dashboard}/>
      <Stack.Screen name='СБРОС' component={ResetPassword}/>
      <Stack.Screen name='ЗАКАЗ' component={Card} option={{headerShown: false,headerBackTitleVisible: false,title:'Заказ'}}/>
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250,
        
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MyStack} />
    </Drawer.Navigator>
  )
} 

export default function AppContainer() {
  
  return (
    
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
console.disableYellowBox = true;