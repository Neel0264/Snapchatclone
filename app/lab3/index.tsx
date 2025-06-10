import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Increment from "../../components/increment";
import Decrement from "../../components/decrement";

export default function RoutingLab3() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.viewContainer}>
      <Text>Counter: {count}</Text>
      <Increment count={count} onIncrement={handleIncrement} />
      <Decrement count={count} onDecrement={handleDecrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
