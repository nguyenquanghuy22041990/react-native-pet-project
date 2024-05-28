import Ionicons from '@expo/vector-icons/Ionicons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView'; 

import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ApiResponse, Character } from './list/character';

const ListScreen: React.FC = () => {
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dattebayo-api.onrender.com/characters');
                const result: ApiResponse = await response.json();
                setData(result.characters);
            } catch(err) {
                console.log(err);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
           <ThemedText type="title">LIST OF CHARACTERS</ThemedText>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <FlatList
                  data={item.images}
                  keyExtractor={(image, index) => index.toString()}
                  renderItem={({ item: image }) => (
                    <Image source={{ uri: image }} style={styles.image} />
                  )}
                  horizontal
                />
              </View>
            )}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
    item: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      color: 'red',
      fontSize: 16,
    },
  });

export default ListScreen;