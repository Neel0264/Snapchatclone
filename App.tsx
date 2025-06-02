import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const onSnapPress = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <View style={styles.screen}>
      
      {/* Top Icons Row */}
      <View style={styles.header}>
        <Text style={styles.icon}>🔍</Text>
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.icon}>⚙️</Text>
      </View>

      
