import React from 'react';
import { Image, Linking, TouchableHighlight, View, Text, StyleSheet, ScrollView } from 'react-native';

const Advantages = () => {
    return(
<View style={styles.back10}>
      
        <View>
        <Text style={{color:'black',fontSize:28,textAlign:'center',marginTop:20,marginBottom:10,marginLeft:20}}>НАШИ ПРЕИМУЩЕСТВА</Text>
           <View style={styles.rect10}>
             <View style={styles.image4Row}>
                 <Image
                     source={require("../../images/1611179.png")}
                      resizeMode="contain"
                     style={styles.image4}
                  ></Image>
                  <Text style={styles.loremIpsum3}>
                    Качественный продукт по низким ценам
                  </Text>
            </View>
          </View>

           <View style={styles.rect11}>
             <View style={styles.image5Row}>
                 <Image
                    source={require("../../images/2823549.png")}
                     resizeMode="contain"
                     style={styles.image5}
                   ></Image>
          <Text style={styles.loremIpsum4}>
            Продукты, которые {"\n"}привозятся только {"\n"}из экологически{" "}
            {"\n"}чистых стран
          </Text>
            </View>
            </View>

        <View style={styles.rect12}>
          <View style={styles.image6Stack}>
            <Image
              source={require("../../images/3219218.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
            <Text style={styles.loremIpsum5}>
              Только {"\n"}высоковалифицированные {"\n"}специалисты
            </Text>
          </View>
          </View>
        </View>
      </View>);}

const styles = StyleSheet.create({
    rect10: {
        width: 324,
        height: 103,
        backgroundColor: "rgba(243,255,109,0.3)",
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 37,
        marginLeft: 13
      },
      image4: {
        width: 61,
        height: 61
      },
      loremIpsum3: {
        color: "#121212",
        textAlign: "center",
        fontSize: 18,
        marginLeft: 17,
        marginTop: 9
      },
      image4Row: {
        height: 61,
        flexDirection: "row",
        flex: 1,
        marginRight: 18,
        marginLeft: 28,
        marginTop: 21
      },
    image6Stack: {
        width: 287,
        height: 70,
        marginTop: 17,
        marginLeft: 28
      },
    back10:{
        backgroundColor:'white',
        width:350,
        flexDirection:'row', 
        height:500,
        marginLeft:32,
        borderRadius:20,
        marginTop:40
      },
      rect11: {
        width: 324,
        height: 103,
        backgroundColor: "rgba(121,255,109,0.3)",
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 32,
        marginLeft: 13
      },
      image5: {
        width: 69,
        height: 69,
        marginTop: 9
      },
      loremIpsum4: {
        color: "#121212",
        textAlign: "center",
        fontSize: 18,
        marginLeft: 29
      },
      image5Row: {
        height: 88,
        flexDirection: "row",
        flex: 1,
        marginRight: 28,
        marginLeft: 29,
        marginTop: 8
      },
      rect12: {
        width: 324,
        height: 103,
        backgroundColor: "rgba(255,109,109,0.3)",
        borderRadius: 15,
        marginTop: 32,
        marginLeft: 13
      },
      image6: {
        top: 0,
        left: 0,
        width: 70,
        height: 70,
        position: "absolute"
      },
      loremIpsum5: {
        top: 2,
        left: 49,
        position: "absolute",
        color: "#121212",
        textAlign: "center",
        fontSize: 18
      },
    })

export default Advantages