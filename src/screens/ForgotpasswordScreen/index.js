import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ForgotpasswordScreen = () => {
  return (
    <View>
      <View style={{ paddingTop: 63, paddingLeft: 30 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 36 }}>Forgot</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 36 }}>Password ?</Text>
      </View>
      <View style={{ paddingTop: 32, paddingLeft: 29, paddingRight: 29 }}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Username or Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          paddingTop: 26,
          paddingLeft: 30,
          paddingRight: 63,
        }}
      >
        We will send you a message to set or reset your new password
      </Text>
         <TouchableOpacity style={{paddingTop:26,paddingLeft:29,paddingRight:29}}>
      <View style={{borderWidth:1,width:317,height:55,alignItems:'center',justifyContent:'center',borderRadius:10,backgroundColor:'#f83757c1'}}>
     
          <Text style={{ fontWeight: 'semibold', fontSize: 20,color:'#ffffff' }}>Submit</Text>
      
      </View>
        </TouchableOpacity>
    </View>
  );
};

export default ForgotpasswordScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#a8a8a96d',
    paddingHorizontal: 10,
  },
});
