import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type DecrementProps = {
  count: number;
  onDecrement: () => void;
};
const Decrement: React.FC<DecrementProps> = ({ count, onDecrement }) => {
  return (
    <View style={styles.button}>
      <Button title="Decrement" onPress={onDecrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
export default Decrement;
