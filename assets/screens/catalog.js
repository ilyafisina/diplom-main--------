import React, { Component, useLayoutEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Buttom, TouchableHighlight, ImageBackground, Dimensions } from "react-native";
import Header from '../components/news/header';
import Navigation from "../components/news/navigation";
import Footer from "../components/news/footer";
import { StatusBar } from "expo-status-bar";
import {coffe} from '../components/static/coffe'
import { COLORS, SIZES } from '../components/constants';
import MenuImage from "../components/MenuImage/MenuImage";

export default function Catalog(props) {
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
    <View style={styles.container}>
        <StatusBar/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>
	<View style={styles.catalogback}>
		<TouchableHighlight  underlayColor={false} onPress={()=> navigation.navigate("КОФЕ")}>
			<View style={styles.catalogback1}>
				<View style={styles.coffe}>
					<ImageBackground
						source={require("../images/coffe1png.png")}
						resizeMode="contain"
						style={styles.image}
					></ImageBackground>
				</View>
					<View>
						<Text style={{flex:1,marginTop:-135,marginLeft:210,fontSize:58, color:'brown', textAlign:'center'}}>КОФЕ</Text>
					</View>
			</View>
			
		</TouchableHighlight>
			
		
		

		<View style={styles.ponchicback}>
		<TouchableHighlight underlayColor={false} onPress={()=> navigation.navigate("РЕГИСТРАЦИЯ")}>
		<View style={styles.catalogback1}>
				<View style={styles.coffe}>
					<Image
					source={require("../images/cocie.png")}
					resizeMode="contain"
					style={styles.image}
					></Image>
					</View>
					<Text style={{flex:1,marginTop:-135,marginLeft:210,fontSize:50, color:'brown', textAlign:'center'}}>ПОНЧИК</Text>
					</View>	
					</TouchableHighlight>
			
		</View>
		</View>

      </ScrollView>
	  
      <Navigation/>
    </View>

  );
}

const styles = StyleSheet.create({
	ponchicback:{
		backgroundColor:'white',
		borderRadius:30,
		marginBottom:20
	},
	imageback:{
		width:600,
		height:200
		
	},
	coffe:{
		width:150,
		backgroundColor:'rgba(210, 105, 30,0.7)',
		height:150,
		justifyContent:'center',
		textAlign:'center',
		marginLeft:36,
		marginTop:30,
		borderRadius:30,
		marginBottom:30
	},
catalogback:{
	backgroundColor:'rgba(139, 69, 19,1)',
    borderRadius:40,
	marginBottom:20,
},
catalogback1:{
	height:215,
	backgroundColor:'white',
    borderRadius:40,
	marginTop:60,
	marginBottom:20
},
  container: {
    flex:1,
	backgroundColor:'white'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
	width:80,
	alignContent:'center',
	marginLeft:40
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


