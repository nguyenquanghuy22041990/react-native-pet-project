import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UseRefScreen: React.FC = () => {
  
  const inputRef = useRef<TextInput>(null);

  
  const [text, setText] = useState('');

  
  const clearInput = () => {
    setText('');
    if (inputRef.current) {
      inputRef.current.clear();
    }
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        ref={inputRef}
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
        placeholder="Type something..."
        value={text}
        onChangeText={(value) => setText(value)}
      />
    
      <Button title="Clear" onPress={clearInput} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
});

export default UseRefScreen;