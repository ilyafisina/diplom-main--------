import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";

const Sirop =() =>{
  const [isDisabled1, setDisabled1] = useState(false);
  const [isDisabled2, setDisabled2] = useState(false);
  const [isDisabled3, setDisabled3] = useState(false);
  const [isDisabled4, setDisabled4] = useState(false);

  const handlePress1 = () => {
    setDisabled1(true);
    setTimeout(() => setDisabled1(false),30000);
  };
  const handlePress2 = () => {
    setDisabled2(true);
    setTimeout(() => setDisabled2(false),30000);
  };
  const handlePress3 = () => {
    setDisabled3(true);
    setTimeout(() => setDisabled3(false),30000);
  };
  const handlePress4 = () => {
    setDisabled4(true);
    setTimeout(() => setDisabled4(false),30000);
  };
return (
    <View style={{marginTop: 20,borderWidth:1, borderRadius:20, padding:10}}>
    <View>
        <Text style={{fontSize:20, textAlign:'center'}}>ВЫБЕРИТЕ СИРОП</Text>
    </View>
    <View style={{display: 'flex',
    flexDirection: 'row', marginBottom:10}}>
            <ScrollView pagingEnable 
						horizontal 
            showsHorizontalScrollIndicator={false} >
        <View style={{display: 'flex',
    flexDirection: 'row', marginBottom:60, marginTop:40, marginLeft:70, marginRight:20}}>
      <TouchableOpacity onPress={handlePress1}
       style={[styles.isTouch,isDisabled1 && styles.appButtonDisabled]} disabled={isDisabled1} >
      <View>
          <Image style={{width:150,height:150}} source={require('../../images/sirop_coconut.jpg')}></Image>
          <Text style={{textAlign:'center'}}>COCONUT</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={(handlePress2)}
       style={[styles.isTouch,isDisabled2 && styles.appButtonDisabled]} disabled={isDisabled2}>
          <View >
          <Image style={{width:150,height:150}} source={require('../../images/sirop_cranberry.jpg')}></Image>
          <Text style={{textAlign:'center'}}>CRANBERRY</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress3}
       style={[styles.isTouch,isDisabled3 && styles.appButtonDisabled]} disabled={isDisabled3}>
          <Image style={{width:150,height:150}} source={require('../../images/sirop_green.jpg')}></Image>
          <Text style={{textAlign:'center'}}>BANANA VERTE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress4}
       style={[styles.isTouch,isDisabled4 && styles.appButtonDisabled]} disabled={isDisabled4}>
          <Image style={{width:150,height:150}} source={require('../../images/sirop_orange.jpg')}></Image>
          <Text style={{textAlign:'center'}}>COOKIE</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
        </View>
           );
        }
        const styles = StyleSheet.create({
            appButtonDisabled:{
              borderRadius:30,
              borderColor:'black',
               borderWidth:1,
                padding:20, 
                justifyContent:'center', 
                display:'flex',
                backgroundColor:'white',
                shadowColor:'black',
                shadowOpacity:1,
                shadowRadius:15
            },
          
            isTouch:{
              borderRadius:30,
              borderColor:'black',
               borderWidth:1,
                padding:20, 
                justifyContent:'center', 
                display:'flex',
                backgroundColor:'white',
            },
            picker: {
              marginVertical: 30,
              width: 300,
              padding: 10,
            },
            centeredView: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 0,
              width:'100%'
            },
            modalView: {
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            },
            button1: {
              borderRadius: 20,
              padding: 10,
              elevation: 2,
              width:160,
              shadowRadius:15,
              shadowOpacity:0.6,
              marginTop:20,
              shadowColor:'green'
            },
            button2: {
              borderRadius: 20,
              padding: 10,
              elevation: 2,
              width:160,
              shadowRadius:15,
              shadowOpacity:0.6,
              marginTop:20,
              shadowColor:'blue'
            },
            buttonOpen: {
              backgroundColor: 'green',
            },
            buttonClose: {
              backgroundColor: '#2196F3',
            },
            textStyle: {
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize:20
            },
            modalText: {
              marginBottom: 15,
              textAlign: 'center',
            },
          catalogback:{
              backgroundColor:'rgba(139, 69, 19,1)',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
          },
            container: {
              flex:1,
              backgroundColor:'white'
            },
            image: {
              flex: 1,
              justifyContent: 'center',
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
          });
export default Sirop