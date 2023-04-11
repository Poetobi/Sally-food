import React from 'react';
import { View, Button, Text, TextInput, Image, StyleSheet, SafeAreaView, ImageBackground, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';


const Welcome = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
      'Sora': require('../assets/fonts/Sora.ttf'),
      'Unbounded': require('../assets/fonts/Unbounded.ttf'),
      // add more fonts as needed
    });


    if (!fontsLoaded) {
      return null;
    }
  
    return (
      <ImageBackground
        source={require('../assets/images/bg1.jpeg')}
        style={styles.container}
      >
        <View style={styles.square}>
       <Text style={styles.words}> Quick, easy & delicious meals </Text>
       <View style={styles.circle}>

       <TouchableHighlight
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <View style={styles.iconCircle}>
          <Icon name="arrow-right" size={30} color="#fff" />
        </View>
      </TouchableHighlight>
      
    </View>
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
        width: 400,
        height: 450,
        borderRadius: 50,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    
        backgroundColor: '#fff',
    
      },

      words: {
        fontSize: 60,
        fontFamily: 'Unbounded',
        textAlign: 'center',
        color: '#000',
        lineHeight: 62,
      },

      circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  
  


export default Welcome