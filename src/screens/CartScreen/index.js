<<<<<<< HEAD
// src/screens/CartScreen/index.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems,"my cart items from the redux useselctor ")
  const renderItem = ({ item }) => {
    // Handle different image source formats
    let imageSource = { uri: 'https://images.unsplash.com/photo-1533374206871-33b8f07c216c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b29wc3xlbnwwfHwwfHx8MA%3D%3D' }; // Default placeholder
    
    if (item.image) {
      if (typeof item.image === 'string') {
        // Handle string URLs
        if (item.image.startsWith('http') || item.image.startsWith('data:image/')) {
          imageSource = { uri: item.image };
        } else if (item.image.uri) {
          // Handle object with uri property
          imageSource = { uri: item.image.uri };
        }
      } else if (item.image.uri) {
        // Handle image object with uri
        imageSource = { uri: item.image.uri };
      }
    }

    return (
      <View style={styles.itemContainer}>
        <Image 
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
          // onError={(error) => console.log('Image load error:', error.nativeEvent.error)}
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1533374206871-33b8f07c216c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b29wc3xlbnwwfHwwfHx8MA%3D%3D' }}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>Size: {item.size}</Text>
          <Text>Qty: {item.quantity}</Text>
          <Text style={styles.price}>Total: ₹{item.price * item.quantity}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart Items</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => `${item.id}-${item.size}`}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  price: {
    fontWeight: 'bold',
    color: '#2A59FE',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default CartScreen;
=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
