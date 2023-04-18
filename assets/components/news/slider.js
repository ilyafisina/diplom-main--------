import React from 'react';
import { Image, Linking, TouchableHighlight, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import {news} from '../../com';
const {width} = Dimensions.get("window");
const height = width * 0.6;
const Slider = () => {
	return (
        <View>
<View
		style={{marginTop: 30,flexDirection: 'row',justifyContent: 'center',}}>
					<View style={{ width,height }}>
						<ScrollView 
						pagingEnable 
						horizontal 
            showsHorizontalScrollIndicator={false}
						//showsHorizontalScrollIndicator={false}
						style={{width, height}}>
						{news.map((news, idx) => (
						<Image source={{ uri: news.image }} style={{ width, height, resizeMode:'cover', }}/>))}
						</ScrollView>		
					</View>
					<View style={{flexDirection:'row',position:'absolute',bottom:0}}></View>
			</View>
      </View>);}
export default Slider
    