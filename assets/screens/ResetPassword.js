import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import firebase from '../config/firebase';
import auth from '../config/firebase'
import {
    sendPasswordResetEmail,
  } from 'firebase/auth';

export default function ResetPassword() {
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
  
    const resetUserPassword = async () => {
      try {
        await sendPasswordResetEmail(auth, email);
        setSubmitted(true);
        setError(null);
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          setError('User not found');
        } else {
          setError('There was a problem with your request');
        }
      }
    };
  
    return (
      <View>
      <ImageBackground source={require("../images/von-login.jpg")}resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
        blurRadius='5'> 
        
      <View style={styles.outer}>
      <View style={styles.rect1}>
        <Image source={require("../images/icons/refreshing.png")} style={{width:100,height:100, marginBottom:60}}/>
        <View style={styles.inner}>
        
        
        
          <Text style={styles.header}>Восстановление пароля</Text>
  
          {error && <Text style={styles.error}>{error}</Text>}
  
          {submitted ? (
            <Text>Please check your email for a reset password link.</Text>
          ) : (
            <>
              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Введите email адрес"
                autoCapitalize="none"
                placeholderTextColor="#aaa"
                style={styles.input}
                
              />
  
              <Button title="Восстановление"  onPress={firebase.auth().sendPasswordResetEmail(email)} disabled={!email} />
            </>
          )}
          </View>
          
        </View>
        
      </View>
      </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    outer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inner: {
      width: 240,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginBottom: 16,
      width:250,
    },
    error: {
      marginBottom: 20,
      color: 'red',
    },
    image: {
      width: 914,
      height: 927,
      marginLeft: -250,
    },
    image_imageStyle: {},
    rect1:{
      backgroundColor:'white',
      width:300, 
      height:400, 
      justifyContent:'center', 
      alignItems:'center', 
      marginTop:-150,
      borderRadius:30
    }
  });
