import React, { useReducer } from 'react';
import Checkbox from 'expo-checkbox';
import {  View, StyleSheet, Text, Button } from 'react-native';

const initialState = { count: 0 };

const reducer = (state: typeof initialState, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const ReducerScreen: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginVertical: 20 }}>Count: {state.count}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
        <Button title="Increment" onPress={() => dispatch({ type: 'increment' })} />
        <Button title="Decrement" onPress={() => dispatch({ type: 'decrement' })} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Reset" onPress={() => dispatch({ type: 'reset' })} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 16,
      paddingTop: 80,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
  });

export default ReducerScreen;