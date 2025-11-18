import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/myimage.jpg')}
          style={styles.profileImage}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.profileName}>Abhishek Thakur</Text>
          <Text style={styles.profileEmail}>abhishekthakur50896@gmail.com</Text>
          <Text style={styles.profileEmail}>8894950896</Text>
        </View>
        <Feather
          name="edit-3"
          size={18}
          color="#F83758"
          style={{ marginLeft: 'auto' }}
        />
      </View>

    
      <View style={styles.menuContainer}>
        <MenuItem icon={<Feather name="shopping-bag" size={20} />} text="Orders" />
        <MenuItem icon={<Feather name="credit-card" size={20} />} text="My Details" />
        <MenuItem icon={<Feather name="map-pin" size={20} />} text="Delivery Address" />
        <MenuItem icon={<Feather name="credit-card" size={20} />} text="Payment Methods" />
        <MenuItem icon={<Feather name="tag" size={20} />} text="Promo Code" />
        <MenuItem icon={<Feather name="bell" size={20} />} text="Notifications" />
        <MenuItem icon={<Feather name="help-circle" size={20} />} text="Help" />
        <MenuItem icon={<Feather name="info" size={20} />} text="About" />
      </View>

     
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('SignIn')}>
        <Feather name="log-out" size={20} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icon}
      <Text style={styles.menuText}>{text}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 50,
    height: 70,
    borderRadius: 30,
    resizeMode:'cover'
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileEmail: {
    color: '#888',
    fontSize: 14,
    marginTop: 4,
  },
  menuContainer: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F83758',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ProfileScreen;
