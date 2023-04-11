import React, { useState } from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



const Cart = ({ navigation }) => {

    const [rating, setRating] = useState(0);

  return (

    <View style={styles.container}>
        <View style={styles.wrap}>
    <TouchableOpacity onPress={() => navigation.navigate('User')}>
      <View style={styles.iconContainer}>
        <SimpleLineIcons name="arrow-left" size={24} style={styles.icon} />
      </View>
    </TouchableOpacity>
    <View style={styles.iconContainer}>
      <SimpleLineIcons name="handbag" size={24} style={styles.icon} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>1</Text>
      </View>

    </View>

    

    </View>
    <Image
        source={require('../assets/images/food5.png')}
        style={{ width: 400, height: 400 }}
        resizeMode="contain"
      />
<View style={styles.textGrp}>
<Text style={styles.text}>Grilled Pompano Fish</Text>
<Text style={styles.subText}>Our Grilled Pompano Fish is a delicacy 
that seafood lovers can't resist. This freshwater fish is sustainably 
sourced and carefully chosen to ensure the highest quality and freshness. 
</Text>
</View>
<View style={styles.stars}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <TouchableOpacity
            key={ratingValue}
            onPress={() => handleRating(ratingValue)}
          >
            {ratingValue <= 4 ? (
              <SimpleLineIcons name="star" size={24} color="#FFD700" marginLeft={3} />
            ) : ratingValue <= rating ? (
              <SimpleLineIcons name="star" size={24} color="#ddd"marginLeft={3}/>
            ) : (
              <SimpleLineIcons name="star" size={24} color="#ddd" marginLeft={3} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>


<View style={styles.desc}>

<Text style={styles.det}> Details Per Order</Text>

<TouchableOpacity style={styles.full}> 
<Text styl>Details </Text></TouchableOpacity>



</View>
    

<View style={styles.desc}>

<Text style={styles.amount}> £45.69</Text>

<TouchableOpacity style={styles.btn}> 
<Text>Details </Text></TouchableOpacity>


</View>
    


  </View>

  
);
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    
  },

  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#ffffff',
    padding: 10,
  },

  iconContainer: {
    marginRight: 20,
    marginTop: 30

  },
  icon: {
    color: '#000000',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#ff0000',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 14,
  },


  textGrp: {
    marginVertical: 10,
    paddingHorizontal: 30,
    marginTop: -20
    },
  
    text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    },
  
    subText: {
    fontSize: 14,
    color: '#777',
    paddingTop: 10,
    lineHeight: 20
    },

    stars: {

      flexDirection: 'row',
      marginHorizontal: 30,
    },

    desc: {

      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginHorizontal: 30,
      marginTop: 14
    },

    det: {

      fontWeight: 'bold'
      
    },

    amount: {

      fontWeight: 'bold',
      fontSize: 30,
      
    },

    full: {

      fontWeight: 'bold',
      padding: 7,
      borderWidth: 1, 
      borderRadius: 10,
      borderColor: 'green',
      color: 'width',
      paddingHorizontal: 10,

      
    },


    btn: {

      fontWeight: 'bold',
      padding: 7,
      paddingHorizontal: 10,
      // borderWidth: 1, 
      borderRadius: 10,
      backgroundColor: 'green',
      color: 'white'
      
    },

    Text: {
      color: 'white'
    }


});


export default Cart