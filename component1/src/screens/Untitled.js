import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../assets/images/von-login.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View gradientImage="Gradient_h4YUT85.png" style={styles.rect}>
          <Text style={styles.авторизация}>АВТОРИЗАЦИЯ</Text>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox}
          ></MaterialUnderlineTextbox>
          <MaterialRightIconTextbox
            style={styles.materialRightIconTextbox}
          ></MaterialRightIconTextbox>
          <CupertinoButtonGrey
            style={styles.cupertinoButtonGrey}
          ></CupertinoButtonGrey>
        </View>
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Еще нет аккаунта? Зарегистрируйтесь!
        </Text>
        <Button
          title="Forgot Password?"
          onPress={()=> this.props.navigation.navigate('СБРОС')} 
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 401,
    overflow: "visible",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.67)",
    borderRadius: 30,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    backgroundColor: "rgba(0,0,0,0.67)",
    marginTop: 266,
    marginLeft: 360
  },
  авторизация: {
    fontFamily: "bad-script-regular",
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
    marginLeft: 15
  },
  cupertinoButtonGrey: {
    height: 44,
    width: 156,
    marginTop: 65,
    marginLeft: 57
  }
});

export default Untitled;
