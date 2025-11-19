import {
  Image,
  Linking,
<<<<<<< HEAD
  Modal,
=======
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = () => {
  const navigation = useNavigation();
<<<<<<< HEAD
  const [modalVisible, setModalVisible] = useState(false);

=======
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View>
      <View style={{ paddingTop: 63, paddingLeft: 29 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 36 }}>Create an</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 36 }}>account</Text>
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
        <View style={[styles.inputContainer, { marginTop: 31 }]}>
          <Fontisto name="locked" size={20} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Passward"
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
        <Text style={{ paddingTop: 19, paddingLeft: 30, paddingRight: 87 }}>
          By clicking the Register button, you agree to the public offer
        </Text>
        <TouchableOpacity
          style={{
            paddingTop: 52,
<<<<<<< HEAD
            alignItems: 'center',
            // paddingLeft: 20,
            // paddingRight: 29,
          }}
          onPress={() => setModalVisible(true)}
=======
            alignItems:'center'
            // paddingLeft: 20,
            // paddingRight: 29,
          }}
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
        >
          <View
            style={{
              borderWidth: 1,
              width: 317,
              height: 55,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#f83757c1',
            }}
          >
            <Text
              style={{
                fontWeight: 'semibold',
                fontSize: 20,
                alignSelf: 'center',
              }}
            >
              Create Account
            </Text>
          </View>
        </TouchableOpacity>
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
<<<<<<< HEAD
        <Text style={{ fontSize: 17, textAlign: 'center', paddingTop: 28 }}>
=======
        <Text style={{ fontSize: 17,textAlign:'center', paddingTop: 28 }}>
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
          I Already Have an Account{'  '}
          <Text
            style={{ color: '#f83757c1', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('SignIn')}
          >
            Login
          </Text>
        </Text>
      </View>
<<<<<<< HEAD

      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Account Created ✅</Text>
            <Text style={styles.modalMsg}>
              Your account has been successfully created.
            </Text>
            <View style={styles.closeBtn}>

            <TouchableOpacity
          
              onPress={() => setModalVisible(false)}
            >
              <View
                style={{
                  backgroundColor: '#f83757',
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>OK</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => navigation.goBack()}>
              <View
                style={{
                  backgroundColor: '#f83757',
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
              </View>
              </TouchableOpacity>
              </View>
              
        
          </View>
        </View>
      </Modal>
=======
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#a8a8a93a',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
  },
<<<<<<< HEAD
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalMsg: {
    textAlign: 'center',
    marginBottom: 20,
  },

  closeBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:10
  },
=======
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
});
