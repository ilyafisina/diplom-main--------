// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput,Alert } from 'react-native';
import {signInWithEmailAndPassword, sendPasswordResetEmail,} from "firebase/auth";
import firebase from '../config/firebase';


export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: '',
    }
  }
  
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      email:firebase.auth().currentUser.email,
      password:firebase.auth().currentUser.password,
      phone:firebase.auth().currentUser.phone,
      city:firebase.auth().currentUser.city
    }
    
     
    return (
    <View>
        <Text>kfmrmk</Text>
    </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    textAlign:'center',
    fontSize:25,
    marginTop:200
  },
  back:{
    height:50,
    justifyContent:'center',
    borderStartColor:'black',
    borderBottomWidth:3,
    margin:30
  },
  exit:{
    
  },
  text:{
    textAlign:'center',
    fontSize:25,
  }
});