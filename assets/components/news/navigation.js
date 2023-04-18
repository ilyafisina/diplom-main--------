import React from 'react';
import { Image, Linking, TouchableHighlight, View, Text, StyleSheet, ScrollView } from 'react-native';

const Navigation = () => {
    return(
<View style={styles.rect}>
        <View style={styles.rect1StackRow}>
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}>
              <Text style={styles.news}>НОВОСТИ</Text>
            </View>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.catalog}>КАТАЛОГ</Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.contact}>КОНТАКТЫ</Text>
          </View>
        </View>
      </View>
    );}

    const styles = StyleSheet.create({
        rect: {
            width: 318,
            height: 57,
            backgroundColor: "rgba(8,103,0,1)",
            borderRadius: 32,
            borderWidth: 0,
            borderColor: "#000000",
            marginTop: 802,
            marginLeft: 48,
            position:'absolute',
          },
          rect1: {
            top: 0,
            width: 94,
            height: 41,
            position: "absolute",
            backgroundColor: "rgba(255,255,255,1)",
            borderRadius: 32,
            left: 3,
            marginTop:8,
            marginLeft:10
          },
          news: {
        
            color: "#121212",
            marginTop: 13,
            marginLeft: 14
          },
          rect1Stack: {
            width: 97,
            height: 43
          },
          rect2: {
            width: 94,
            height: 41,
            backgroundColor: "rgba(172,212,176,1)",
            borderRadius: 32,
            marginLeft: 113,
            marginTop:-35
          },
          catalog: {
        
            color: "#121212",
            marginTop: 13,
            marginLeft: 16
          },
          rect3: {
            width: 94,
            height: 41,
            backgroundColor: "rgba(172,212,176,1)",
            borderRadius: 32,
            marginLeft: 213,
            marginTop:-41
          },
          contact: {
        
            color: "#121212",
            marginTop: 13,
            marginLeft: 15
          },
        })
export default Navigation