<<<<<<< HEAD
import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SettingsScreen = ({ navigation }) => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  const toggleNotification = () =>
    setIsNotificationEnabled(previousState => !previousState);

  const settingsOptions = [
    { icon: 'bell', label: 'Notification', type: 'switch' },
    { icon: 'sun', label: 'Dark Mode' },
    { icon: 'star', label: 'Rate App' },
    { icon: 'share-2', label: 'Share App' },
    { icon: 'file-text', label: 'Privacy Policy' },
    { icon: 'file', label: 'Terms and Conditions' },
    { icon: 'file', label: 'Cookies Policy' },
    { icon: 'mail', label: 'Contact' },
    { icon: 'message-circle', label: 'Feedback' },
    { icon: 'log-out', label: 'Logout' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
          <Icon name="arrow-left" size={2} color="#fff" />
      </View>

      <ScrollView style={styles.content}>
        {settingsOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionRow}
            activeOpacity={0.7}
            onPress={() => console.log(item.label)}
          >
            <View style={styles.optionLeft}>
              <Icon
                name={item.icon}
                size={20}
                color="#000"
                style={styles.optionIcon}
              />
              <Text style={styles.optionLabel}>{item.label}</Text>
            </View>

            {item.type === 'switch' ? (
              <Switch
                trackColor={{ false: '#E5E5EA', true: '#FD6E87' }}
                thumbColor="#fff"
                value={isNotificationEnabled}
                onValueChange={toggleNotification}
              />
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  header: {
    justifyContent:'space-between',
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {

    fontSize: 20,
    fontWeight: '800',
  },
  content: {
    paddingHorizontal: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F7F9',
    marginTop:10,
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 12,
  },
  optionLabel: {
    fontSize: 16,
    color: '#000',
  },
});
=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingScreen = () => {
  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
