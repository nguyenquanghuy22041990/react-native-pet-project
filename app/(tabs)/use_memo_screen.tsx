import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const UseMemoScreen: React.FC = () => {
  const [number, setNumber] = useState(1);

  const calculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const fibonacciResult = useMemo(() => {
    console.log('Calculating Fibonacci...');
    return calculateFibonacci(number);
  }, [number]); 

    return (
        <View style={styles.container}>
            <Text>Calculate Fibonacci of:</Text>
            <Text>{number}</Text>
            <Button title="Increment" onPress={() => setNumber(number + 1)} />
            <Text>Fibonacci Result: {fibonacciResult}</Text>
        </View>
    );
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    }
  });

export default UseMemoScreen;