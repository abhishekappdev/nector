import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation()

  return (
    <View>
      <View style={{ paddingTop: 63, paddingLeft: 32 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 36 }}>Welcome</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 36 }}>Back!</Text>
      </View>

      <View style={{ paddingLeft: 32, paddingRight: 26, paddingTop: 36 }}>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Username or Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={[styles.inputContainer, { marginTop: 31 }]}>
          <Fontisto name="locked" size={20} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Feather
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')}>
      <Text
        style={{
          fontSize: 17,
          color: '#F83758',
          textAlign: 'right',
          paddingRight: 26,
          paddingTop: 9,
        }}
      >
        Forgot Password?
      </Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 52, paddingLeft: 29, paddingRight: 29 }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 317,
            height: 55,
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#f83757c1',
          }}
          onPress={() => navigation.navigate('GetStarted')}
        >
          <Text
            style={{
              fontWeight: 'semibold',
              fontSize: 20,
              alignSelf: 'center',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: 'medium',
          fontSize: 17,
          paddingTop: 75,
          paddingLeft: 125,
        }}
      >
        - OR Continue with -
      </Text>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
          paddingTop: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 54,
            height: 54,
            justifyContent: 'center',
            alignItems: 'center', // centers horizontally & vertically
            borderRadius: 25, // optional rounded corners
            borderColor: '#f83757c1',
          }}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.google.com')}
          >
            <Image
              source={require('../../assets/images/googlelogo.png')}
              style={{
                width: 40,
                height: 40,
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com')}
        >
          <View
            style={{
              borderWidth: 1,
              width: 54,
              height: 54,
              justifyContent: 'center',
              alignItems: 'center', // centers horizontally & vertically
              borderRadius: 25,
              borderColor: '#f83757c1', // optional rounded corners
            }}
          >
            <FontAwesome name="facebook" size={35} color="blue" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            width: 54,
            height: 54,
            justifyContent: 'center',
            alignItems: 'center', // centers horizontally & vertically
            borderRadius: 25,
            borderColor: '#f83757c1', // optional rounded corners
          }}
        >
          <FontAwesome name="apple" size={35} color="black" />
        </View>
      </View>
      <Text style={{fontSize:17,textAlign:'center',paddingTop:28}}>
        Create An Account {'  '}
        <Text
          style={{ color: '#f83757c1', fontWeight: 'bold' }}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#a8a8a96d',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
  },
});
