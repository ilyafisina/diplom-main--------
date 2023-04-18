import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Button, TouchableHighlight, Alert, Modal, Pressable, ImageBackground} from "react-native";
import Header from '../components/news/header';
import Model from '../components/modal/stock';
import Navigation from "../components/news/navigation";
import Footer from "../components/news/footer";
import { StatusBar } from "expo-status-bar";
import {coffe} from '../components/static/coffe'
import { COLORS, SIZES } from '../components/constants';
import MenuImage from "../components/MenuImage/MenuImage";
import Sirop from '../components/modal/sirop'



export default function Catalog(props) {
	const { navigation } = props;	
	const [modalVisible1, setModalVisible1] = useState(false);
	
  return (
    <View style={styles.container}>
        <StatusBar/>
    <ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.catalogback}>
	
			<View style={{
					marginTop: 30,
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
				}}>
				{coffe.map((coffe, idx) => (
					<View
						key={`coffe ${idx}`}
						style={{
							width:'95%',
							marginBottom: 20,
                            marginLeft:10,
                            marginRight: 10
						}}>
						<TouchableHighlight
							underlayColor={COLORS.secondary}
							style={{
								height: 200,
								justifyContent: 'center',
								borderRadius: SIZES.radius,
								paddingLeft: 10,
								paddingRight: 10,
								backgroundColor: 'gray',
							}} onPress={() => navigation.navigate('ЗАКАЗ',coffe)}>
							<View style={{ alignItems: 'center'}}>
								
								<ImageBackground source={{ uri: coffe.image }} blurRadius={'5%'} borderRadius={20} style={{ width: 393, height: 200 }}>
									
								<View style={{}}>
									
								<Text style={{
										fontSize: SIZES.h4,
										color: COLORS.white,
										marginTop: 150,
										marginLeft:20,
										fontSize:30,  width:'50%', textAlign:'center', fontStyle:'italic',
										borderRadius:20, borderWidth:2, borderColor:'black',
									}}>
									{coffe.name}
								</Text>
								<View style={{width:110,height:30,backgroundColor:'black', marginTop:-30, marginLeft:270, borderRadius:20}}></View>
								<Text
									style={{
										fontSize: SIZES.h4,
										color:'white',
										textAlign: 'right',
										marginTop:-33,
										marginRight:30, 
										fontSize:30,
										
									}}
								>
									{coffe.price}
								</Text>
								
								</View>
								</ImageBackground>
							</View>
						</TouchableHighlight>
					</View>
				))}
			</View>
		</View>
		{coffe.map((coffe, idx) => (
		<Modal
        animationType="slide"
        transparent={true}
		key={idx}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible1(!modalVisible1);
        }}> 
		<View style={{backgroundColor:'white',justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    width:'100%'}}>
        <><View><Text style={{maginTop:100}}>{coffe.name}</Text></View>
		<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<ScrollView showsHorizontalScrollIndicator={false}>
						<Model />
						<Sirop />
						<View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
							<Pressable
								style={[styles.button2, styles.buttonClose]}
								onPress={() => [setModalVisible1(!modalVisible1), Alert.alert('Товар успешно добавлен в корзину')]}>
								<Text style={styles.textStyle}>ПРИГОТОВИТЬ</Text>
							</Pressable>
						</View>
					</ScrollView>
				</View>
			</View></>
		</View>
      </Modal>
		))}
      </ScrollView>
      <Navigation/>
    </View>

  );
}

const styles = StyleSheet.create({
catalogback:{
	backgroundColor:'rgba(139, 69, 19,1)',
    borderRadius:40
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


