import React from 'react';
import { Image, Linking, TouchableHighlight, View, Text, StyleSheet, ScrollView } from 'react-native';

const Top = () => {
    return(
        
        <ScrollView pagingEnable 
						horizontal 
            showsHorizontalScrollIndicator={false}>
        <View style={{marginTop:50,backgroundColor:'white',borderRadius:30,marginLeft:30}}>
        <Image source={require('../../images/image_18.png')}
        resizeMode="contain"
        style={styles.image18}></Image>
        <Text style={{fontSize:32, textAlign:'center'}}>LATTE</Text>
        <Text style={{color:'red',marginLeft:140}}>220р</Text>
        <View style={styles.rect9}></View>
        <Text style={{color:'black',textAlign:'center',fontSize:25}}>190р</Text>
        </View>
        <View style={{marginTop:50, backgroundColor:'white',borderRadius:30,marginLeft:30}}>
        <Image source={require('../../images/image_18.png')}
        resizeMode="contain"
        style={styles.image18}></Image>
        <Text style={{fontSize:32, textAlign:'center',marginLeft:30}}>CAPUCHINO</Text>
        <Text style={{color:'red',marginLeft:140}}>200р</Text>
        <View style={styles.rect9}></View>
        <Text style={{color:'black',textAlign:'center',fontSize:25}}>150р</Text>
        </View>
        <View style={{marginTop:50, backgroundColor:'white',borderRadius:30,marginLeft:30}}>
        <Image source={require('../../images/image_18.png')}
        resizeMode="contain"
        style={styles.image18}></Image>
        <Text style={{fontSize:32, textAlign:'center',marginLeft:30}}>CAPUCHINO</Text>
        <Text style={{color:'red',marginLeft:140}}>200р</Text>
        <View style={styles.rect9}></View>
        <Text style={{color:'black',textAlign:'center',fontSize:25}}>150р</Text>
        </View>
        <View style={{marginTop:50, backgroundColor:'white',borderRadius:30,marginLeft:30}}>
        <Image source={require('../../images/image_18.png')}
        resizeMode="contain"
        style={styles.image18}></Image>
        <Text style={{fontSize:32, textAlign:'center',marginLeft:30}}>CAPUCHINO</Text>
        <Text style={{color:'red',marginLeft:140}}>200р</Text>
        <View style={styles.rect9}></View>
        <Text style={{color:'black',textAlign:'center',fontSize:25}}>150р</Text>
        </View>
        <View style={{marginTop:50, backgroundColor:'white',borderRadius:30,marginLeft:30}}>
        <Image source={require('../../images/image_18.png')}
        resizeMode="contain"
        style={styles.image18}></Image>
        <Text style={{fontSize:32, textAlign:'center',marginLeft:30}}>CAPUCHINO</Text>
        <Text style={{color:'red',marginLeft:140}}>200р</Text>
        <View style={styles.rect9}></View>
        <Text style={{color:'black',textAlign:'center',fontSize:25}}>150р</Text>
        </View>
        <View style={{marginTop:50, backgroundColor:'white',borderRadius:30,marginLeft:30}}>
        <Image source={require('../../images/image_18.png')}
        resizeMode="contain"
        style={styles.image18}></Image>
        <Text style={{fontSize:32, textAlign:'center',marginLeft:30}}>CAPUCHINO</Text>
        <Text style={{color:'red',marginLeft:140}}>200р</Text>
        <View style={styles.rect9}></View>
        <Text style={{color:'black',textAlign:'center',fontSize:25}}>150р</Text>
        </View>
        <View style={{marginTop:50, backgroundColor:'white',borderRadius:30,marginLeft:30}}>
        <Image source={require('../../images/image_18.png')}
        resizeMode="contain"
        style={styles.image18}></Image>
        <Text style={{fontSize:32, textAlign:'center',marginLeft:30}}>CAPUCHINO</Text>
        <Text style={{color:'red',marginLeft:140}}>200р</Text>
        <View style={styles.rect9}></View>
        <Text style={{color:'black',textAlign:'center',fontSize:25}}>150р</Text>
        </View>
        </ScrollView>
      
    );
}
const styles = StyleSheet.create({
    rect8:{
        backgroundColor: "rgba(210, 105, 30,1)",
        borderRadius: 30,
        height: 347,
        marginTop:30
      },
      image18:{
        width:215,
        height:200,
        marginTop:20,
      },
      rect9:{
        width: 31,
        height: 1,
        backgroundColor: "rgba(0,0,0,1)",
        marginLeft: 140
      },
});
export default Top