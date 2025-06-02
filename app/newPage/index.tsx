import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/button";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const EMOJI_STORIES = [
  { emoji: "🦁", name: "Leo" },
  { emoji: "🐼", name: "Panda" },
  { emoji: "🐸", name: "Froggy" },
  { emoji: "🦊", name: "Foxy" },
  { emoji: "🐵", name: "Monkey" },
];

const StoriesPage: React.FC = () => {
  const router = useRouter();
  const handleBackPress = () => {
    router.push("/");
  };

  const labCompete = () => {
    alert("Assignment 1 completed!");
  };
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>Stories</Text>
        <TouchableOpacity>
          <MaterialIcons name="add-circle-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Stories List */}
      <ScrollView contentContainerStyle={styles.storiesList}>
        {/* My Story */}
        <TouchableOpacity style={styles.storyItem}>
          <View style={styles.myStoryCircle}>
            <Text style={styles.emoji}>😊</Text>
          </View>
          <Text style={styles.storyText}>My Story</Text>
        </TouchableOpacity>
        {/* Friends' Stories */}
        {EMOJI_STORIES.map((story, idx) => (
          <TouchableOpacity key={story.name} style={styles.storyItem}>
            <View style={styles.storyCircle}>
              <Text style={styles.emoji}>{story.emoji}</Text>
            </View>
            <Text style={styles.storyText}>{story.name}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.button} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={labCompete}>
          <Text style={styles.buttonText2}>Click It!</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  storiesList: {
    padding: 20,
  },
  storyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  myStoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fffc00",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#fff",
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#fffc00",
  },
  emoji: {
    fontSize: 32,
  },
  storyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "black",
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "yellow",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StoriesPage;
