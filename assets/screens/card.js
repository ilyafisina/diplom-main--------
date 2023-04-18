import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Button, Alert, Modal, Pressable, CustomPicker, TouchableOpacity } from "react-native";
import Header from '../components/news/header';
import Navigation from "../components/news/navigation";
import { StatusBar } from "expo-status-bar";
import Model from '../components/modal/stock';
import Sirop from '../components/modal/sirop';
import {coffe} from '../components/static/coffe'


const Card =({route}) =>{
  const [modalVisible, setModalVisible] = useState(false);
  
return (
    <View style={styles.container}>
        <StatusBar barStyle='black' />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 20, paddingBottom: 10,shadowOpacity:0.7, shadowRadius:10 }}>
      <View style={{shadowRadius:15, shadowColor:'white',height:330}}>
      <Image style={{width:414,height:300,borderRadius:30}} source={{uri: route.params.image}}></Image>
      </View>
      <View>
        <View style={{backgroundColor:'white', borderRadius:20, shadowRadius:10, shadowColor:'white', shadowOpacity:0.7, marginTop:-100}}>
        <Text style={{textAlign:'center',fontSize:25, color:'black', marginTop:30, fontFamily:'Skellyman', }}>ОПИСАНИЕ</Text>
        <Text style={{fontSize:20,margin:15, padding:15, textAlign:'center', fontFamily:'Skellyman'}}>{route.params.description}</Text>
        <View style={{marginLeft:125, marginBottom:100}}>
      <Pressable
        style={[styles.button1, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>ЗАКАЗАТЬ</Text>
      </Pressable>
      </View>
</View>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}> 
        
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Model/>
            <Sirop/>
            <View style={{display:'flex',justifyContent:'center',alignItems: 'center',}}>
            <Pressable
              style={[styles.button2, styles.buttonClose]}
              onPress={() => [setModalVisible(!modalVisible),Alert.alert('Товар успешно добавлен в корзину')]}>
              <Text style={styles.textStyle}>ПРИГОТОВИТЬ</Text>
            </Pressable>
            </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
        
      
      </View>
    </View>

      
      </ScrollView>
      <Navigation/>
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
    marginTop: 100,
    width:'100%',
    
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor:'black',
    shadowOpacity:1,
    shadowRadius:40
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:160,
    shadowRadius:15,
    shadowOpacity:0.6,
    marginTop:20,
    shadowColor:'brown'
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:160,
    shadowRadius:15,
    shadowOpacity:0.6,
    marginTop:20,
    shadowColor:'brown', 
    marginBottom:60
  },
  buttonOpen: {
    backgroundColor: 'brown',
  },
  buttonClose: {
    backgroundColor: 'brown',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:19
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
export default Card