import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const SplashScreen4 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <AntDesign name="right" size={24} color="black" /> */}
      {/* <AntDesign name="arrow-left" size={24} color="black" /> */}
      {/* <AntDesign name="aim" size={24} color="black" /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 1,
          padding: 5,
        }}
      >
        <Text>
          <Text style={styles.numerator}>3</Text>
          <Text>/</Text>
          <Text style={styles.denominator}>3</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ fontWeight: '500', fontSize: 20 }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/images/Splash4.png')}
        style={styles.Image}
      />
      <Text style={styles.header}>Get Your Order</Text>
      <Text style={styles.taxt}>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
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
   
             <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.PrevText}>Prev</Text>
          </TouchableOpacity>

  
          <View style={styles.indicatorContainer}>
            <View style={styles.inactiveDot} />
            <View style={styles.inactiveDot} />
            <View style={styles.activeDot} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.nextText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen4;

const styles = StyleSheet.create({
  Image: {
    width: 350,
    height: 233,
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
    margin:10
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
    gap: 90,
  },

  nextText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F83758',
  },
  PrevText:{
    fontSize:20,

  },
});
