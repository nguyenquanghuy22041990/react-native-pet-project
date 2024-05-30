import React, { useState, useCallback } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const CounterComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <CounterButton onPress={increment} />
    </View>
  );
};

interface CounterButtonProps {
  onPress: () => void; 
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