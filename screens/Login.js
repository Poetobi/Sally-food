import React, { useState }  from 'react';
import { View, Button, Text, TextInput, Image, StyleSheet, SafeAreaView, ImageBackground, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
// import * as Google from 'expo-google-app-auth';


const Login = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Sora': require('../assets/fonts/Sora.ttf'),
        'Unbounded': require('../assets/fonts/Unbounded.ttf'),
        // add more fonts as needed
      });
    


  return (
    <ImageBackground
      source={require('../assets/images/bg2.jpeg')}
      style={styles.container}
    >
      <View style={styles.square}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Enter Username"
            style={styles.input}
            placeholderTextColor={'#999'}
            keyboardType="default"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={'#999'}
            keyboardType="default"
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => navigation.navigate('User')}
            title="Login"
            color="white"
            Size="6"
            style={styles.btn}
          />
        </View>
        <Text style={styles.account}>Don't have an account?</Text>
        <Button onPress={() => navigation.navigate('Signup')} title="Create Account" color="black">
          <Icon name="arrow" size={30} color="lightgray" />
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  square: {
    width: 350,
    height: 450,
    borderRadius: 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(255, 255, 255, .95)',

  },
  bottom: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    width: '80%',
    marginLeft: 20,
  },

  message: {
    width: 250,
    height: 250,
    marginTop: -100,
  },
  btn: {
    color: 'gray',
    fontSize: 10,
  },

  btnContainer: {

    backgroundColor: 'red',
    width: 300,
    padding: 10,
    borderRadius: 10,
  },

  inputContainer: {
    marginBottom: 20,
    width: 300,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    placeholderTextColor: '#999',
  },

  label: {
    color: '#333',
        marginBottom: 10,
        fontSize: 16,

  },

  account: {
    marginTop: 20,
    marginBottom: 10,
    color: '#999',
    fontSize: 16,
  },
});

export default Login;
