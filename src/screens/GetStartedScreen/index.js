import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/getstart.png')}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <View style={{ paddingTop: 545, alignItems: 'center' }}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 40, color: '#ffffffff' }}
          >
            you want
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#ffffff' }}>
            Authentic, here
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#ffffff' }}>
            you go!
          </Text>
        </View>
        <TouchableOpacity style={{ paddingTop: 60, alignItems: 'center' }}
        onPress={() => navigation.navigate('MainTab') }>
          <View
            style={{
              borderWidth: 1,
              width: 279,
              height: 55,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#f83757ff',
            }}
          >
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'semibold',
                color: '#ffffff',
                alignSelf: 'center',
              }}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({});
