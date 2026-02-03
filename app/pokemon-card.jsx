import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default function PokemonCard({ data, isLoading, error }) {
  if (isLoading) {
    return (
      <View style={styles.card}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://ui.dev/images/courses/pokemon-unknown.png' }}
          style={styles.errorImage}
        />
        <Text style={styles.title}>Oops.</Text>
        <Text style={styles.subtitle}>
          {error.message ?? 'Something went wrong'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: data?.sprites?.front_default }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {data.name}
      </Text>

      <Text style={styles.subtitle}>
        No. {data.id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  errorImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
  },
});
