import { useState, useEffect, use } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import vacationDestinations from "../lib/vacationsDestinations";

type Destination = {
  id: number;
  location: string;
  price: number;
  average_yearly_temperature: string;
};

export default function Lab4() {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    if (!selectedDestination) return;

    const fetchApiData = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${selectedDestination.location}`
        );
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        setApiData(null);
      }
    };

    fetchApiData();
  }, [selectedDestination]);
  return (
    <View style={styles.container}>
      <FlatList
        data={vacationDestinations}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => setSelectedDestination(item)}
          >
            <Text style={styles.itemText}>{item.location}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedDestination && (
        <View style={styles.selectedDestinationContainer}>
          <Text style={styles.selectedDestinationText}>
            Selected Destination: {selectedDestination.location}
          </Text>
          <Text style={styles.selectedDestinationText}>
            Price: {selectedDestination.price}
          </Text>
          <Text style={styles.selectedDestinationText}>
            Average Yearly Temperature:{" "}
            {selectedDestination.average_yearly_temperature}
          </Text>
          {apiData && (
            <View style={styles.apiDataContainer}>
              <Text style={styles.apiDataText}>API Data:</Text>
              <Image
                source={{ uri: apiData.thumbnail.source }}
                style={styles.apiDataThumbnail}
              />
              <Text style={styles.apiDataText}>{apiData.extract}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    marginBottom: 8,
    margin: 5,
    backgroundColor: "#ffc8dd",
    padding: 8,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 16,
  },
  selectedDestinationContainer: {
    marginTop: 16,
    backgroundColor: "#cdb4db",
    padding: 16,
  },
  selectedDestinationText: {
    fontSize: 16,
    fontFamily: "serif",
  },
  apiDataContainer: {
    marginTop: 8,
    padding: 3,
  },
  apiDataText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    fontFamily: "serif",
  },
  apiDataThumbnail: {
    width: 100,
    height: 100,
    marginBottom: 8,
    alignSelf: "center",
  },
});
