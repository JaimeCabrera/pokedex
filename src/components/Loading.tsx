import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.loadContainer}>
      <ActivityIndicator size={50} color="red" />
      <Text>Cargando...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
