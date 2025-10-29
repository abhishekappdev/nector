import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 1,
          padding: 5,
        }}
      >
        <Text>
          <Text style={styles.numerator}>1</Text>
          <Text>/</Text>
          <Text style={styles.denominator}>3</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Splash3')}>
          <Text style={{ fontWeight: '500', fontSize: 20 }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/images/Splash2.png')}
        style={styles.Image}
      />
      <Text style={styles.header}>Choose Products</Text>
      <Text style={styles.taxt}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          // left: 0,
          right: 20,
          // alignItems: 'center',
        }}
      >
        <View style={styles.bottomRow}>
          {/* Next Button */}

          {/* Page Indicators */}
          <View style={styles.indicatorContainer}>
            <View style={styles.activeDot} />
            <View style={styles.inactiveDot} />
            <View style={styles.inactiveDot} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Splash3')}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen2;

const styles = StyleSheet.create({
  Image: {
    width: 300,
    height: 300,
    marginTop: 177,
    alignSelf: 'center',
  },
  numerator: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  denominator: {
    fontSize: 15,
    // lineHeight: 18,
    // position: 'relative',
    // top: -6, // raises the text
    // color: 'gray',
  },

  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin:5
  },
  taxt: {
    textAlign: 'center',
    fontSize: 15,
    margin: 5,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeDot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0F1A2C', // dark blue/black color
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D3D5DA', // light gray
    marginHorizontal: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 110, // space between Next and indicators (React Native 0.71+)
  },

  nextText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F83758',
  },
});
