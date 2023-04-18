import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Button } from "react-native";
import Header from '../components/news/header';
import Navigation from "../components/news/navigation";
import Footer from "../components/news/footer";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";

function Auth() {
  return (
    <View style={styles.container}>
        <StatusBar></StatusBar>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>
      <View style={styles.rect11}>  
      <View>
        <Text style={styles.contacts}>АВТОРИЗАЦИЯ</Text>
      </View>
      <View>

        
        <Text style={styles.phone1}>ЛОГИН</Text>
        <TextInput editable clearButtonMode clearTextOnFocus placeholder='Введите логин' maxLength={15} style={styles.input1}></TextInput>
        <Text style={styles.phone2}>ПАРОЛЬ</Text>
        <TextInput editable clearButtonMode clearTextOnFocus placeholder="Введите пароль" maxLength={9}  style={styles.input1}></TextInput>
      
      </View>
      </View>
      </ScrollView>
      <Navigation/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(51, 51, 51, 0.223)',
  },
  input1:{
    fontSize:25,
    fontStyle:'italic',
    padding: 10,
    margin:20,
    textAlign:'center',
    borderWidth:1,
    borderRadius:19
  },
  grasse: {
    color: "rgba(8,103,0,1)",
    fontSize: 48,
    marginTop: 32,
    marginLeft: 70
  },
  back11:{
    backgroundColor:'white',
    borderRadius:20,
    height:450,
    width:350,
    marginLeft:32,
    marginTop:30
  },
  maps:{
    width:290,
    height:300,
    borderRadius:25,
    marginTop:30,
    marginLeft:30
  },
  contacts:{
    textAlign:'center',
    fontSize:32,
    color:'#086700', 
    marginTop:20
  },
  image2:{
    height: 70,
    justifyContent:'center',
    marginLeft:-89,
    marginTop:30
  },
  phone1:{
    fontSize:32,
    textAlign:'center',
    marginTop:30
  },
  phone2:{
    fontSize:32,
    textAlign:'center',
  },
  rect11:{
    backgroundColor:'white',
    borderRadius:20,
    marginLeft:40,
    marginRight:40,
    marginTop:100
  }
});

export default Auth;
