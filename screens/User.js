import React, { useState } from 'react';
import { View, Text, Image, FlatList,TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const products = [
  {
    id: '1',
    name: 'Spaghetti Bolognese',
    description:
      'Sauce made from tomatoes, minced beef, garlic, wine, herbs, and spices.',
    image: require('../assets/images/food3.png'),
    price: '$10',
  },
  {
    id: '2',
    name: 'Fettuccine Alfredo',
    description: 'Rich and creamy sauce made from butter, heavy cream, and Parmesan cheese.',
    image: require('../assets/images/food2.png'),
    price: '$20',
  },
  {
    id: '3',
    name: 'Grilled Pompana Fish',
    description: 'Our Grilled Pompano Fish is a delicacy that seafood lovers cannot resist.',
    image: require('../assets/images/food5.png'),
    price: '$30',
  },
];


const categories = [
  { id: 1, name: 'Pasta' },
  { id: 2, name: 'Pizza' },
  { id: 3, name: 'Seafood' },
  { id: 4, name: 'Dessert' },
];





const User = () => {

  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleCategoryPress = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const navigation = useNavigation();
  // ...
  
  const [cart, setCart] = useState([]);
  const handleAddToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonPriceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity 
  style={[styles.button, {borderRadius: 10} ]}
  onPress={() => {
    handleAddToCart(item.id);
    navigation.navigate('Cart');
  }}
>
  <Text style={styles.buttonText}>Add to Cart</Text>
</TouchableOpacity>

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  
return (
<View style={styles.container}>
<View style={styles.wrapper}>
<View style={styles.menuContainer}>
<SimpleLineIcons name="menu" size={24} color="black" />
</View>
<View style={styles.searchContainer}>
<Icon name="search" size={20} color="black" />
<TextInput style={styles.searchInput} placeholder="Search" />
</View>
<View style={styles.cartContainer}>
<SimpleLineIcons name="handbag" size={24} color="black" />
<View style={styles.badgeContainer}>
<Text style={styles.badgeText}>{cart.length}</Text>
</View>
</View>
</View>
<View style={styles.textGrp}>
<Text style={styles.text}>Welcome! Oliver Gulder</Text>
<Text style={styles.subText}>Newark, New Jersey</Text>
</View>
<View style={styles.catRow}>
<Text style={styles.textly}>See Category</Text>
<Ionicons name="ios-options" size={30} color="#000" />
</View>


<View style={styles.list}>
      <View style={styles.categoriesRow}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              activeCategory === category.name && { backgroundColor: 'green' },
            ]}
            onPress={() => handleCategoryPress(category.name)}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === category.name && { color: 'white' },
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Rest of the menu goes here */}
    </View>

<FlatList
data={products}
renderItem={renderItem}
keyExtractor={(item) => item.id}
/>
</View>
);
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  },

  wrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 30,
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  },

  menuContainer: {
  marginRight: 'auto',
  },

  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 15,
  flex: 1,
  marginHorizontal: 10,
  paddingHorizontal: 10,
  },

  searchInput: {
  flex: 1,
  marginLeft: 10,
  height: 30,
  },

  cartContainer: {
  position: 'relative',
  },

  badgeContainer: {
  position: 'absolute',
  top: -8,
  right: -8,
  backgroundColor: 'red',
  borderRadius: 10,
  width: 20,
  height: 20,
  justifyContent: 'center',
  alignItems: 'center',
  },

  badgeText: {
  color: '#fff',
  fontSize: 12,
  },

  textGrp: {
  marginVertical: 10,
  paddingHorizontal: 10,
  },

  text: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5,
  },

  subText: {
  fontSize: 14,
  color: '#777',
  },

  catRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginVertical: 10,
  },

  textly: {
  fontSize: 16,
  marginRight: 'auto',
  },
  row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  marginBottom: 10,
  },

  items: {
  paddingHorizontal: 20,
  paddingVertical: 5,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 5,
  marginRight: 10,
  },

  itemText: {
  fontSize: 16,
  fontWeight: 'bold',
  },

  itemActive: {
  backgroundColor: 'green',
  color: '#fff',
  },

  item: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
  borderRadius: 5,
  backgroundColor: '#F7F4F3',
  width: '90%',
  borderRadius: 30,
  marginHorizontal: 20,
  marginTop: 10,
  paddingVertical: 10
  // overflow: 'hidden',

  
  },

  
  imageContainer: {
  width: 120,
  height: 120,
  marginTop: -50,
  paddingRight: 50,

  },

  image: {
  width: 160,
  height: 160,
  borderRadius: 5,

  },

  textContainer: {
  flex: 0,
  marginLeft: 50
  },

  name: {
  fontSize: 15,
  marginBottom: 5,
  },

  description: {
  color: '#777',
  fontSize: 11,
  width: 180,

  },

  buttonPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  
  price: {
    fontSize: 14,
    color: '#888',
  },
  
  button: {
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 12,
  },
  

  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  categoryButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonText: {
    color: 'white'
  }

  });
  
  export default User;
  
  
  
  
  