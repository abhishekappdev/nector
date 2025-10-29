import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Splash2');
      console.log('4 seconds passed!');
      console.log('we navigated to other screen ');
    }, 4000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#ffffffff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={require('../../assets/images/Logo.png')}
        style={{ width: 280.42, height: 100.61 }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
