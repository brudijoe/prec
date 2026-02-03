import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonGroup({ handleSetId }) {
  const handlePrevious = () =>
    handleSetId((id) => (id > 1 ? id - 1 : id));

  const handleNext = () =>
    handleSetId((id) => id + 1);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePrevious}>
        <Text style={styles.text}>←</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleNext}>
        <Text style={styles.text}>→</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
