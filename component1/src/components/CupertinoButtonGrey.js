import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonGrey(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => this.userLogin()}>
      <Text style={styles.авторизация}>АВТОРИЗАЦИЯ</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8E8E93",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  авторизация: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonGrey;
