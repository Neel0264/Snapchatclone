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
        <Text style={styles.icon}>✨</Text>
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.icon}>⚙️</Text>
      </View>

      {/* Camera Area (just a visual block) */}
      <View style={styles.cameraBox}>
        <Text style={styles.placeholderText}>Live Camera Preview</Text>
      </View>

      {/* Bottom Controls */}
      <View style={styles.footer}>
        <Text style={styles.icon}>🖼️</Text>
        
        {/* Snap button with onPress alert */}
        <TouchableOpacity onPress={onSnapPress} style={styles.snapCircle} />

        <Text style={styles.icon}>📨</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    marginTop: 45,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cameraBox: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#ffffff',
    fontSize: 16,
  },
  footer: {
    marginBottom: 35,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  snapCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#ffffff',
  },
  icon: {
    fontSize: 22,
    color: '#ffffff',
  },
});
