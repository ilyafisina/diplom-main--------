import React, { Component, useLayoutEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Button, ImageBackground, TouchableHighlight } from "react-native";
import Navigation from "../components/news/navigation";
import Qesha from '../fonts/Quesha.ttf'


export default function Welcome(props) {
  const { navigation } = props;
  return (
    
    <View style={styles.container} >
      <ImageBackground source={require('../images/von_welcome.jpg')} style={{marginTop:-32}} >
      <View><View><Text style={styles.TitelText}>Coffelur</Text></View></View>
      
      <Text style={{textAlign:'center', justifyContent:'center', marginTop:400}}></Text>
      
      <View style={styles.set_signin}>
      <TouchableHighlight underlayColor={false} style={{ borderColor:'white', marginTop:120,
    marginBottom:120,
    borderRadius:10,
    borderColor:'white', backgroundColor:'white',height:40, width:300, justifyContent:'center'}} onPress={()=> navigation.navigate("Login")}>
      
				<View style={styles.coffe}>
					<Text style={{color:'black', textAlign:'center', fontFamily:'Cochin', fontSize:30}}>ПОПРОБОВАТЬ</Text>
					</View>
					</TouchableHighlight>
        </View>
        </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 0,
  },
  TitelText:{
    fontFamily:'Cochin',
    fontWeight: 'bold',
    color:'white',
    fontSize:90,
    textAlign:'center',
    marginTop:160,
  },
  set_signin:{
    justifyContent:'center',
    marginLeft:60
  }
});


