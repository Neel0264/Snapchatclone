import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type IncrementProps = {
  count: number;
  onIncrement: () => void;
};
const Increment: React.FC<IncrementProps> = ({ count, onIncrement }) => {
  return (
    <View style={styles.button}>
      <Button title="Increment" onPress={onIncrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});

export default Increment;
