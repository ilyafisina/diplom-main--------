import React, { Component, useLayoutEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Button } from "react-native";
import MapView from "react-native-maps";
import Header from '../components/news/header';
import Top from "../components/news/top";
import Slider from "../components/news/slider";
import Advantages from "../components/news/advantages";
import Navigation from "../components/news/navigation";
import Footer from "../components/news/footer";
import { StatusBar } from "expo-status-bar";
import MenuImage from '../components/MenuImage/MenuImage';


export default function Index(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);


  return (
    
    
    <View  style={styles.container}>
      <StatusBar/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>
      
      <View style={styles.news}>
        
      <Text style={styles.grasse}>ТОВАР ДНЯ</Text>
      <View style={{backgroundColor:"rgba(210, 105, 30,0.7)",borderRadius:30}}>
      <Top/>
      
      <Advantages/>
      
      <View style={styles.back11}>
        <View>
          <Text style={{color:'black',marginTop:20,fontSize:32, textAlign:'center'}}>КАК НАС НАЙТИ?</Text>
        </View>
        <MapView style={styles.maps} region={{latitude:56.0800,longitude:42.2500,latitudeDelta:1,longitudeDelta:1}}showsUserLocation={true}></MapView>
      </View>
      <Slider/>
      </View>
      
      </View>
      
      </ScrollView>
      <Navigation/>
      
    </View>

  );
}

const styles = StyleSheet.create({
  rect8:{
    backgroundColor: "rgba(210, 105, 30,1)",
    borderRadius: 30,
    height: 347,
    marginTop:30
  },
  news:{
    backgroundColor:'rgba(139, 69, 19,1)',
    borderRadius:40
  },
  container: {
    flex:1,
    backgroundColor:'white'
  },
  grasse: {
    color: "white",
    fontSize: 48,
    marginTop: 12,
    textAlign:'center'
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
});


