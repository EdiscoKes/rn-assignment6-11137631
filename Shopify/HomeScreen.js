import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const products = [
  { id: '1', title: 'OffICE WEAR', subtitle: 'Office waer for your office', price: '$120', image: require('./asset/dress1.png')},
  { id: '2', title: 'BLACK', subtitle: 'Recycle Boucle Knit Cardigan', price: '$120',  image: require('./asset/dress2.png') },
  { id: '3', title: 'CHURCH WEAR', subtitle: 'Reversible Angora Cardigan', price: '$120', image: require('./asset/dress3.png') },
  { id: '4', title: 'LAMEREI', subtitle: 'Reversible Angora Cardigan', price: '$120',  image: require('./asset/dress4.png') },
  { id: '5', title: '21WN', subtitle: 'Reversible Angora Cardigan', price: '$120',  image: require('./asset/dress5.png') },
  { id: '6', title: 'lopo', subtitle: 'Reversible Angora Cardigan', price: '$120',  image: require('./asset/dress6.png')},
  { id: '7', title: '21WN', subtitle: 'Reversible Angora Cardigan', price: '$120',  image: require('./asset/dress7.png') },
  { id: '8', title: 'Lame', subtitle: 'Reversible Angora Cardigan', price: '$120',  image: require('./asset/dress3.png') },
   
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity><Ionicons name="menu" size={30} color="black" /></TouchableOpacity>
           <View>
      <Image style={styles.logo} source={require('./asset/Logo.png')} />
    </View>
       
        <View style={styles.headerIcons}>
          <TouchableOpacity><Ionicons name="search" size={24} color="black" /></TouchableOpacity>
          </View>
        
          <View style={{marginLeft:-50}}> 
             <TouchableOpacity onPress={() => navigation.navigate('Cart')}><FontAwesome name="shopping-bag"  size={24} color="black" /></TouchableOpacity>
          </View>
      
      </View>
      <View style={styles.storySection}>
        <Text style={styles.story}>OUR STORY</Text>
        
         <View style={styles.buttons}>
          <TouchableOpacity><Ionicons name="list" size={30} color="black" /></TouchableOpacity>
  </View>
  <View style={styles.button}>
          <TouchableOpacity><MaterialIcons name="filter-list" size={30} color="#FF8C00" /></TouchableOpacity>

   </View>
        
       
  
      
      </View>
    <FlatList
  data={products}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
        <FontAwesome name="plus-circle" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  )}
  numColumns={2}
/>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1,
   padding: 10,
   marginTop:40,
   backgroundColor:"white"},

  header: { flexDirection: 'row',
   justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 10 },

  headerIcons: {
     flexDirection: 'row' },

  title: { fontSize: 24,
   fontWeight: 'bold' },

  storySection: { flexDirection: 'row',
   justifyContent: 'space-between', 
   alignItems: 'center',
    marginVertical: 20 },

  story: { fontSize: 18, 
  fontWeight: '',
  fontSize:25 },

  buttons: { flexDirection: 'row', 
  justifyContent: 'flex-end',
  backgroundColor:"#D3D3D3",
  borderRadius:20
   },
   button:{
marginLeft:-100,
backgroundColor:"#D3D3D3",
borderRadius:20
   },

  card: { flex: 1, margin: 10, padding: 10, 
  backgroundColor: '#f9f9f9',
   borderRadius: 10, 
   alignItems: 'center' },

  image: { width: 150,
   height: 200, 
   borderRadius: 10 },

  productTitle: { fontSize: 18, 
  fontWeight: 'bold',
   marginTop: 10,
   marginLeft:-40 },

  subtitle: { fontSize: 14, 
  color: '#666' },

  price: { fontSize: 16,
   fontWeight: 'bold', 
   marginVertical: 10,
   color:"#FF8C00" },

  addButton: { position: 'absolute',
   top:150, right: 5,
    backgroundColor: '',
     padding: 10,
      borderRadius: 50,
      alignItems: '', 
      justifyContent: '' },
});

export default HomeScreen;
