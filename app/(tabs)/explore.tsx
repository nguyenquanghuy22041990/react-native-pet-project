import React, { useState, useCallback } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const CounterComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array ensures the function is memoized only once

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      {/* Pass the memoized callback function to a child component */}
      <CounterButton onPress={increment} />
    </View>
  );
};

interface CounterButtonProps {
  onPress: () => void; // Define the type of the onPress callback function
}

const CounterButton: React.FC<CounterButtonProps> = ({ onPress }) => {
  return (
    <Button title="Increment" onPress={onPress} />
  );
};

export default CounterComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});