import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ImageSlider } from 'react-native-image-slider-banner';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
// import MenuButton from '../../navigation/components/MenuButton';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [remainingTime, setRemainingTime] = useState(
    23 * 60 * 60 + 55 * 60 + 20,
  );

  // countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const images = [
    { src: require('../../assets/images/Ellipse4.png'), label: 'Beauty' },
    { src: require('../../assets/images/unsplash1.png'), label: 'Fashion' },
    { src: require('../../assets/images/unsplash2.png'), label: 'Kids' },
    { src: require('../../assets/images/unsplash3.png'), label: 'Mens' },
    { src: require('../../assets/images/unsplash4.png'), label: 'Womens' },
    { src: require('../../assets/images/unsplash5.png'), label: 'Gifts' },
  ];

  const products = [
    {
      id: '1',
      image: require('../../assets/images/unsplash.png'),
      name: 'NIke Sneakers',
      description: 'Mid Peach Mocha Shoes For Man White Black Pink S...',
      price: 1900,
      oldPrice: 2499,
      discount: '40%Off',
      rating: 4,
      reviews: 56890,
    },
    {
      id: '2',
      image: require('../../assets/images/image1.png'),
      name: 'TITAN Men Watch-1806N',
      description:
        'This Titan watch in Black color is I wanted to buy for a long time',
      price: 1500,
      oldPrice: 2499,
      discount: '40%Off',
      rating: 4,
      reviews: 56890,
    },
    {
      id: '3',
      image: require('../../assets/images/image2.png'),
      name: 'HRX by Hrithik Roshan',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      price: 2499,
      oldPrice: 4999,
      discount: '50%Off',
      rating: 4,
      reviews: 344657,
    },
    {
      id: '4',
      image: require('../../assets/images/image3.png'),
      name: 'Philips BHH880/10',
      description:
        'Hair Straightening Brush With Keratin Infused Bristles (Black)',
      price: 999,
      oldPrice: 1999,
      discount: '50%Off',
      rating: 5,
      reviews: 646776,
    },
    {
      id: '5',
      image: require('../../assets/images/image4.png'),
      name: 'Women Printed Kurta',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      price: 1500,
      oldPrice: 3500,
      discount: '60%Off',
      rating: 4,
      reviews: 15007,
    },
  ];
  const products2 = [
    {
      id: '1',
      image: require('../../assets/images/MaskGroup.png'),
      name: `IWC Schaffhausen
2021 Pilot's Watch "SIHH 2019" 44mm`,
      price: 1500,
      oldPrice: 2499,
      discount: '40%Off',
      rating: 4,
      reviews: 344657,
    },
    {
      id: '3',
      image: require('../../assets/images/MaskGroup2.png'),
      name: `Mammon Women's Handba (Set of 3, Beige)`,
      price: 999,
      oldPrice: 1999,
      discount: '50%Off',
      rating: 5,
      reviews: 646776,
    },
    {
      id: '4',
      image: require('../../assets/images/MaskGroup3.png'),
      name: 'Do Bhai Women Wedges Sandal (Butterfly)',
      price: 1500,
      oldPrice: 3500,
      discount: '60%Off',
      rating: 4,
      reviews: 15007,
    },
    {
      id: '5',
      image: require('../../assets/images/MaskGroup4.png'),
      name: 'Lakme Enrich Matte Lipstick - Shade RM1(4.7gm)',
      price: 1500,
      oldPrice: 3500,
      discount: '60%Off',
      rating: 4,
      reviews: 15007,
    },
  ];
  const ProductCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          marginRight: 14,
          width: 200,
          paddingBottom: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          elevation: 4,
        }}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
// onPress={() => navigation.navigate('ProductDetail', { id: item.id, preview: item })}

      >
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 140,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          resizeMode="cover"
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: '600', fontSize: 14 }}>{item.name}</Text>
          <Text style={{ color: '#555', fontSize: 12, marginTop: 2 }}>
            {item.description}
          </Text>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              ₹{item.price}
            </Text>
            <Text
              style={{
                color: '#888',
                fontSize: 12,
                textDecorationLine: 'line-through',
                marginLeft: 6,
              }}
            >
              ₹{item.oldPrice}
            </Text>
            <Text style={{ color: 'red', fontSize: 12, marginLeft: 6 }}>
              {item.discount}
            </Text>
          </View>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesome
                key={index}
                name="star"
                size={13}
                color={index < item.rating ? '#f5a623' : '#ccc'}
              />
            ))}
            <Text style={{ color: '#777', fontSize: 12, marginLeft: 6 }}>
              {item.reviews}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 10,
          elevation: 4,
        }}
      >
        <Feather name="menu" size={26} color="#000" />
        <Image
          source={require('../../assets/images/Logo.png')}
          style={{
            width: 120,
            height: 40,
            resizeMode: 'contain',
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MaterialIcons name="account-circle" size={34} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingLeft: 19, paddingRight: 32, paddingTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 12,
              paddingHorizontal: 10,

              height: 40,
              elevation: 2,
              shadowColor: '#000',
              shadowRadius: 1,
            }}
          >
            <Feather name="search" size={18} color="#555" />
            <TextInput
              placeholder="Search any product"
              placeholderTextColor="#888"
              style={{ flex: 1, marginLeft: 8, fontSize: 14, color: '#000' }}
            />
            <Feather name="mic" size={18} color="#555" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 19,
            paddingRight: 32,
            paddingTop: 16,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>All Featured</Text>
          <Text style={{ fontSize: 17 }}>
            Filter
            <Feather name="filter" size={24} color="black" />
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 20, paddingTop: 16 }}
        >
          <View style={{ flexDirection: 'row', gap: 10, paddingRight: 40 }}>
            {images.map((item, index) => (
              <View key={index} style={{ alignItems: 'center' }}>
                <Image
                  source={item.src}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
                <Text style={{ marginTop: 6, fontSize: 14, color: '#000000' }}>
                  {item.label}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={{ padding: 10 }}>
          <ImageSlider
            data={[
              { img: require('../../assets/images/Group2.png') },
              { img: require('../../assets/images/Group2.png') },
              { img: require('../../assets/images/Group2.png') },
            ]}
            localImg={true}
            autoPlay={true}
            timer={3000}
            preview={false}
            onItemChanged={item => console.log('item', item)}
            indicatorContainerStyle={{ bottom: 5 }}
            onClick={(item, index) => {
              console.log('Slider clicked at index:', index);
              navigation.navigate('Productdiscount');
            }}
          />
        </View>

        <View style={{ paddingTop: 15, alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#3A8DFF',
              borderRadius: 12,
              padding: 16,
              width: 347,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                Deal of the Day
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 4,
                }}
              >
                <Ionicons name="time-outline" size={16} color="#fff" />
                <Text style={{ color: '#fff', marginLeft: 6, fontSize: 13 }}>
                  {hours}h {minutes}m {seconds}s remaining
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Text style={{ color: '#3A8DFF', fontWeight: '600' }}>
                View all
              </Text>
              <Entypo
                name="arrow-long-right"
                size={18}
                color="#3A8DFF"
                style={{ marginLeft: 6 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <FlatList
            horizontal
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductCard item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.leftSection}>
            <View
              style={{
                backgroundColor: '#EFAD18',
                borderColor: '#EFAD18',
                borderWidth: 1,
                height: 171,
                width: 10,
              }}
            />

            <ImageBackground
              source={require('../../assets/images/Group.png')}
              style={styles.decorBackground}
            >
              <View style={{ paddingLeft: 90 }}>
                <Image
                  source={require('../../assets/images/Rectangle3.png')}
                  style={styles.shoeImage}
                />
              </View>
            </ImageBackground>
          </View>

          <View style={styles.rightSection}>
            <Text style={styles.title}>Flat and Heels</Text>
            <Text style={styles.subtitle}>Stand a chance to get rewarded</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Visit now →</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: 15, alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#FD6E87',
              borderRadius: 12,
              padding: 16,
              width: 347,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
                Trending Products
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 4,
                }}
              >
                <EvilIcons name="calendar" size={24} color="#fff" />
                <Text style={{ color: '#fff', marginLeft: 6, fontSize: 16 }}>
                  Last Date 29/02/22
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                // backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '600' }}>View all</Text>
              <Entypo
                name="arrow-long-right"
                size={18}
                color="#fff"
                style={{ marginLeft: 6 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <FlatList
            horizontal
            data={products2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductCard item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ padding: 10 }}>
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
            indicatorContainerStyle={
              {
                // bottom: 1,
              }
            }
          />
        </View>
        <View style={{ paddingLeft: 24, paddingRight: 28 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>New Arrivals</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 2,
            }}
          >
            <Text style={{ fontSize: 18, color: '#555' }}>
              Summer’ 25 Collections
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#FF3B5C',
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '500',
                  marginRight: 6,
                }}
              >
                View all
              </Text>
              <Feather name="arrow-right" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingLeft: 24, paddingTop: 24 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 10 }}>
            Sponserd
          </Text>
          <Image
            source={require('../../assets/images/image12.png')}
            style={{ width: 351, height: 292 }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 5 }}>
            up to 50% Off
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 343,
    height: 172,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },

  decorBackground: {
    width: 90,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 6,
  },

  shoeImage: {
    width: 140,
    height: 108,
    resizeMode: 'contain',
  },

  rightSection: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingLeft: 80,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  subtitle: {
    color: '#666',
    marginVertical: 6,
  },

  button: {
    backgroundColor: '#FF4B6E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 4,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FADADD', // light pink
    borderRadius: 15,
    height: 200,
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 16,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  discount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    color: '#444',
    fontSize: 14,
    marginVertical: 2,
  },
  bannerButton: {
    backgroundColor: '#ffffffff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#000',
    fontWeight: '600',
  },
  bannerImage: {
    width: 120,
    height: 120,
  },
});
