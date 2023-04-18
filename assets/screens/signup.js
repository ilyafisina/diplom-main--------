// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ImageBackground, Image,TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import firebase from '../config/firebase';
import AsyncStorage from 'react-native';
import logo from '../images/logo_1new.png'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Font from 'expo-font';
let customFonts = {
  'Quesha': require('../fonts/Quesha.ttf'),

};
export default class Signup extends Component {
  state = {
    fontsLoaded: false,
  };
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Введите данные для регистрации!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .sendSignInLinkToEmail(email, string);
      Promise()
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName,
  
        })
        console.log('Пользователь зарегистрировался!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: '',
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../images/von-login.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
        blurRadius='5'
      >
        <View style={{ marginLeft:447, marginTop:50,marginBottom:-150}}>
        <Image style={{width:100,height:100}} source={logo}/>
        </View>
        <View style={{width:400,height:2,backgroundColor:'white', marginTop:170, marginBottom:-155, marginLeft:296}}/>
        <View style={{textAlign:'center'}}>
        <Text style={{color:'white', flex:1, textAlign:'center', fontFamily:'Quesha', marginBottom:-600,marginTop:150, marginLeft:77, fontSize:60}}>COFFELUR</Text>
        
        </View>
        <View style={{width:400,height:2,backgroundColor:'white', marginTop:200, marginBottom:-200, marginLeft:296,}}/>
        <View>
        <View gradientImage="Gradient_h4YUT85.png" style={styles.rect}>
          
          <Text style={styles.авторизация}>РЕГИСТРАЦИЯ</Text>
          <View style={styles.materialUnderlineTextbox}>
          <View style={styles.TextInput2}>
          <TextInput
              editable clearButtonMode
                autoCapitalize="none"
                placeholder="Имя"
                placeholderTextColor="white"
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                style={styles.inputStyle}
              ></TextInput></View></View>
          <View style={styles.materialUnderlineTextbox}>
          <View style={styles.TextInput2}>
          
              <TextInput
              editable clearButtonMode
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="white"
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
                style={styles.inputStyle}
              ></TextInput>
            </View>
          </View>
          <View style={styles.materialRightIconTextbox}>
            <View style={styles.TextInput2}>
              <TextInput editable clearButtonMode placeholder="Пароль"
                  value={this.state.password}
                  placeholderTextColor="white"
                  onChangeText={(val) => this.updateInputVal(val, 'password')}
                  maxLength={15}
                  secureTextEntry={true} style={styles.inputStyle}></TextInput>
              <Icon name="eye" onClick={() => setVisibility(!visible)} style={styles.iconStyle}>
              </Icon>
            </View>
          </View>
          <View style={styles.cupertinoButtonGrey}>
          <TouchableOpacity style={styles.Touch1} onPress={() => this.registerUser()}>
      <Text style={styles.авторизация1}>ВХОД</Text>
    </TouchableOpacity>
          </View>
        </View>
        <View >
        <Text style={{marginTop:-50, color:'white', textAlign:'center', marginLeft:80}}
         onPress={() => this.props.navigation.navigate('Login')}>
          Уже зарегистрировались? Войдите
        </Text>
        </View>
        <View style={{marginLeft:80,marginTop:-30}}>
        <Button
         
          title="Забыли пароль?"
          onPress={()=> this.props.navigation.navigate('СБРОС') } 
        />
        </View>
        </View>
      </ImageBackground>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Touch1: {
    backgroundColor: "#8E8E93",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    width:100,
    height:40,
    marginLeft:30,
    marginTop:-20
  },
  авторизация1: {
    color: "#fff",
    fontSize: 17
  },
  TextInput2: {
    borderBottomWidth: 1,
    borderColor: "white",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    color:'white'
  },
  inputStyle: {
    color: "white",
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8
  },
  TextInput:{
  borderBottomWidth: 1,
  borderColor: "#D9D5DC",
  backgroundColor: "transparent",
  flexDirection: "row",
  alignItems: "center"
},
  inputStyle: {
    color: "white",
    paddingRight: 5,
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: 914,
    height: 927,
    marginLeft: -288
  },
  image_imageStyle: {},
  rect: {
    width: 270,
    height: 471,
    overflow: "visible",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 30,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    backgroundColor: "rgba(0,0,0,0.50)",
    marginTop: 266,
    marginLeft: 360,
    color:'white',
    
  },
  авторизация: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 34,
    marginLeft: 67
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 241,
    marginTop: 42,
    marginLeft: 15
  },
  materialRightIconTextbox: {
    height: 43,
    width: 241,
    marginTop: 49,
    marginLeft: 15,
    color:'white'
  },
  cupertinoButtonGrey: {
    height: 44,
    width: 156,
    marginTop: 65,
    marginLeft: 57,
    color:'white'
  }
});
    
