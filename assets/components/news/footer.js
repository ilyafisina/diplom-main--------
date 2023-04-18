import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
    return(
<View style={styles.back12}>
          <Text style={styles.textfooter}>Все права защищены 2023{"\n"}COFFEELUR</Text>
      </View>

    );}
    const styles = StyleSheet.create({
        back12:{
            backgroundColor:'green',
            height:100,
            borderRadius:15
          },
          textfooter:{
            color:'white',
            fontSize:15,
            textAlign:'center',
            marginTop:50
          },
        })
export default Footer