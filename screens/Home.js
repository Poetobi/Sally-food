import React, { useEffect } from 'react';
import { StatusBar, View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const Splash = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    // Add your required fonts here
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome'); // Replace 'Main' with your main screen name
    }, 3000); // Change the delay as per your requirement
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Image
        source={require('../assets/images/sally.png')}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Splash;
