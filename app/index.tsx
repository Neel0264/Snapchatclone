import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
export default function App() {
  const router = useRouter();
  const handlePress = () => {
    router.push("newPage");
  };

  return (
    <View style={styles.screen}>
      {/* Top Icons Row */}
      <View style={styles.header}>
        <Text style={styles.icon}>✨</Text>
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.icon}>⚙️</Text>
      </View>

      <View style={styles.cameraBox}></View>
      <View style={styles.footer}>
        <Text style={styles.icon}>🖼️</Text>
        {/* Snap button with onPress alert */}
        <TouchableOpacity onPress={handlePress} style={styles.snapCircle}>
          <Text style={styles.text}>Stories</Text>
        </TouchableOpacity>

        <Text style={styles.icon}>📨</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    marginTop: 45,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cameraBox: {
    flex: 1,
    backgroundColor: "#2b2b2b",
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#ffffff",
    fontSize: 16,
  },
  footer: {
    marginBottom: 35,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  snapCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#ffffff",
  },
  icon: {
    fontSize: 22,
    color: "#ffffff",
  },
  text: {
    marginLeft: 10,
    marginTop: 23,
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
  },
});
