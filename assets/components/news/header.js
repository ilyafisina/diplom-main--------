import React, {useLayoutEffect} from 'react';
import { Image, Linking, TouchableHighlight, View, Text, StyleSheet, ImageBackground } from 'react-native';
import MenuImage from '../MenuImage/MenuImage';
import { StatusBar } from "expo-status-bar";
function Store(){
  return(
    <Image
          source={require("../../images/image_3.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
  )
}

const Header = () => {
	return (
    
	  <View style={styles.imageRow}>
      <StatusBar barStyle='black' />
        <TouchableHighlight onPress={()=> Linking.openURL('../../screens/contact.js')}>
        <Image
          source={require("../../images/image_2.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        </TouchableHighlight>
        <View style={styles.rect6Column}>
          <View style={styles.rect6}></View>
          <Text style={styles.coffeelur}>COFFEELUR</Text>
          <View style={styles.rect7}></View>
        </View>
       
        <Image
          source={require("../../images/image_3.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      
	)
}
const styles = StyleSheet.create({
    rect4: {
        width: 414,
        height: 38,
        backgroundColor: "black"
      },
      image: {
        width: 50,
        height: 43,
        marginTop: 6
      },
      rect6: {
        width: 171,
        height: 3,
        backgroundColor: "brown",
      },
      coffeelur: {
        color: "#121212",
        fontSize: 32
      },
      rect7: {
        width: 171,
        height: 3,
        backgroundColor: "brown",
        marginTop: 0
      },
      rect6Column: {
        width: 171,
        marginLeft: 49,
        marginTop: 6,
        marginBottom: 8
      },
      image2: {
        width: 56,
        height: 56,
        marginLeft: 36,
      },
      imageRow: {
        height: 56,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 23,
        marginRight: 29,
        backgroundColor:'white'
      },
      grasse: {
        color: "white",
        fontSize: 48,
        marginTop: 32,
        marginLeft: 70
      },
      rect8:{
        backgroundColor: "white",
        borderRadius: 18,
        width: 212,
        height: 307,
        marginLeft:110,
        marginTop:30
      },
    });

export default Header
