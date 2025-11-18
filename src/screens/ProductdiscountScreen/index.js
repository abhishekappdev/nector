import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { products2 } from '../Data';

const ProductdiscountScreen = () => {
  const navigation = useNavigation();
  // navigation.navigate('Productdiscount');

  const ProductCard = ({ item, navigation }) => {
    return (
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      >
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.name}
          </Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{item.price}</Text>
            <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
          </View>

          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>

          <View style={styles.ratingRow}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesome
                key={index}
                name="star"
                size={12}
                color={index < item.rating ? '#f5a623' : '#ccc'}
              />
            ))}
            <Text style={styles.reviewCount}>{item.reviews}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      {/* Header */}
      <View style={styles.header}>
        <Feather name="menu" size={26} color="#000" />
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MaterialIcons name="account-circle" size={34} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products2}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation} />
        )}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <View style={styles.searchBox}>
                <Feather name="search" size={18} color="#555" />
                <TextInput
                  placeholder="Search any product"
                  placeholderTextColor="#888"
                  style={styles.searchInput}
                />
                <Feather name="mic" size={18} color="#555" />
              </View>
            </View>

            {/* Filter Header */}
            <View style={styles.filterRow}>
              <Text style={styles.itemCount}>{products2.length} Items</Text>
              <Text style={styles.filterText}>
                Filter <Feather name="filter" size={24} color="black" />
              </Text>
            </View>
          </>
        }
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
};

export default ProductdiscountScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 2,
  },
  logo: { width: 120, height: 40, resizeMode: 'contain' },
  searchContainer: { paddingLeft: 5, paddingRight: 5,  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 40,
    elevation: 2,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: '#000' },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
  },
  itemCount: { fontWeight: 'bold', fontSize: 18 },
  filterText: { fontSize: 17 },
  productsContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '48%',
    marginBottom: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginRight: 6,
  },
  oldPrice: {
    color: '#888',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 6,
  },
  discountText: {
    color: '#FF4B6E',
    fontSize: 11,
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewCount: {
    color: '#777',
    fontSize: 11,
    marginLeft: 4,
  },
});
