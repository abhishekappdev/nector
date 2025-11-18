import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageSlider } from 'react-native-image-slider-banner';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const { width } = Dimensions.get('window');

const ProductDetailScreen = () => {
  const dispatch = useDispatch();

  // src/screens/ProductDetailScreen/index.js
  const handleAddToCart = () => {
    // Ensure we have a valid image source
    const imageSource = product?.image
      ? typeof product.image === 'string'
        ? product.image
        : product.image.uri
      : '';

    const cartItem = {
      id: product.id,
      name: product.name,
      image: imageSource,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
    };
    dispatch(addToCart(cartItem));

    console.log(cartItem, 'my item is ready for disptach ');
    console.log(
      product?.image,
      'my item is ready for disptach  product?.image ',
    );
    console.log(product.image, 'my item is ready for disptach product.image');
    console.log(
      product.image.uri,
      'my item is ready for disptach product.image.uri ',
    );
    // Navigate to Cart screen
    navigation.navigate('MainTab', {
      screen: 'CartTab',
      params: {
        screen: 'Cart',
        // Optional: Scroll to the newly added item
        params: { scrollToItem: cartItem.id },
      },
    });
  };

  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params?.product;
  console.log(product.image, 'product from the route');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <MaterialIcons
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={24}
            color={isFavorite ? '#FF4B6E' : '#000'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        {/* <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.productImage} resizeMode="contain" />
        </View> */}

        {/* <View style={{ padding:10}}>
                  <ImageSlider
                    data={[
                      {
                        img: Image.resolveAssetSource(
                          require('../../assets/images/MaskGroup5.png'),
                        ).uri,
                      },
                      {
                        img: Image.resolveAssetSource(
                          require('../../assets/images/MaskGroup5.png'),
                        ).uri,
                      },
                      {
                        img: Image.resolveAssetSource(
                          require('../../assets/images/MaskGroup5.png'),
                        ).uri,
                      },
                    ]}
                    autoPlay={true}
                    timer={3000}
                    useNativeDriver={false}
                    onItemChanged={item => console.log('item', item)}
                    closeIconColor="#ffffffff"
                    indicatorContainerStyle={{
                      // bottom: 1,
                    }}
                  />
                </View> */}

        <View style={{ padding: 10 }}>
          <ImageSlider
            data={[
              {
                img:
                  typeof product.image === 'number'
                    ? Image.resolveAssetSource(product.image).uri
                    : product.image.uri || product.image,
              },
              {
                img:
                  typeof product.image === 'number'
                    ? Image.resolveAssetSource(product.image).uri
                    : product.image.uri || product.image,
              },
              {
                img:
                  typeof product.image === 'number'
                    ? Image.resolveAssetSource(product.image).uri
                    : product.image.uri || product.image,
              },
            ]}
            autoPlay={false}
            timer={3000}
            useNativeDriver={false}
            onItemChanged={item => console.log('item', item)}
            closeIconColor="#ffffffff"
            indicatorContainerStyle={
              {
                // bottom: 1,
              }
            }
          />
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>

          {product.description && (
            <Text style={styles.productDescription}>{product.description}</Text>
          )}

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesome
                  key={index}
                  name="star"
                  size={16}
                  color={index < product.rating ? '#f5a623' : '#ccc'}
                />
              ))}
            </View>
            <Text style={styles.reviewText}>
              {product.reviews
                ? `${product.reviews.toLocaleString()} reviews`
                : '0 reviews'}
            </Text>
          </View>

          {/* Price */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{product.price}</Text>
            {product.oldPrice && (
              <>
                <Text style={styles.oldPrice}>₹{product.oldPrice}</Text>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{product.discount}</Text>
                </View>
              </>
            )}
          </View>

          {/* Size Selection */}
          <View style={styles.sizeContainer}>
            <Text style={styles.sectionTitle}>Select Size</Text>
            <View style={styles.sizeOptions}>
              {sizes.map(size => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.sizeButtonSelected,
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize === size && styles.sizeTextSelected,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Quantity */}
          <View style={styles.quantityContainer}>
            <Text style={styles.sectionTitle}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Feather name="minus" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Feather name="plus" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Product Details */}
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Product Details</Text>
            <Text style={styles.detailText}>
              {product.description ||
                'High-quality product with excellent craftsmanship. Perfect for daily use.'}
            </Text>
          </View>

          {/* Delivery Info */}
          <View style={styles.deliveryInfo}>
            <View style={styles.deliveryItem}>
              <Feather name="truck" size={20} color="#1EBE6A" />
              <Text style={styles.deliveryText}>Free Delivery</Text>
            </View>
            <View style={styles.deliveryItem}>
              <Feather name="refresh-cw" size={20} color="#1EBE6A" />
              <Text style={styles.deliveryText}>7 Days Return</Text>
            </View>
            <View style={styles.deliveryItem}>
              <Feather name="shield" size={20} color="#1EBE6A" />
              <Text style={styles.deliveryText}>Secure Payment</Text>
            </View>
          </View>
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomBar}>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalLabel}>Total Price</Text>
            <Text style={styles.totalPrice}>₹{product.price * quantity}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <TouchableOpacity style={styles.addToCartButton}>
              <FontAwesome name="shopping-bag" size={24} color="#fff" />
              <Text style={styles.addToCartText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToCartButton2}
              onPress={handleAddToCart}
            >
              <Feather name="shopping-cart" size={20} color="#fff" />
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  imageContainer: {
    width: width,
    height: 300,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  reviewText: {
    color: '#888',
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 12,
  },
  oldPrice: {
    fontSize: 18,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountBadge: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: '#FF4B6E',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  sizeContainer: {
    marginBottom: 24,
  },
  sizeOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sizeButtonSelected: {
    backgroundColor: '#FF4B6E',
    borderColor: '#FF4B6E',
  },
  sizeText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  sizeTextSelected: {
    color: '#fff',
  },
  quantityContainer: {
    marginBottom: 24,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
    color: '#000',
  },
  detailsSection: {
    marginBottom: 24,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  deliveryInfo: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 100,
  },
  deliveryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  deliveryText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#333',
  },
  bottomBar: {
    // position: 'absolute',

    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: -2 },
    // shadowRadius: 8,
  },
  totalPriceContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  totalLabel: {
    fontSize: 12,
    color: '#888',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  addToCartButton2: {
    flexDirection: 'row',
    backgroundColor: '#FF4B6E',
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#0d9304ff',
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ProductDetailScreen;
