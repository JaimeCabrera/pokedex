import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';

export const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <SafeAreaView>
        <SearchInput />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    // backgroundColor: 'grey',
    marginHorizontal: 20,
  },
});
