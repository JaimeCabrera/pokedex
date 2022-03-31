import React from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {globalStyles} from '../theme/appTheme';

const WindowWidth = Dimensions.get('window').width;

export const Search = () => {
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View style={styles.searchContainer}>
      <SafeAreaView>
        <SearchInput
          style={{
            position: 'absolute',
            zIndex: 999,
            top: 20,
            opacity: 0.93,
            width: WindowWidth - 40,
          }}
        />
        <FlatList
          ListHeaderComponent={() => (
            <Text
              style={[
                globalStyles.globalTitle,
                globalStyles.globalMarginHorizontal,
                styles.title,
              ]}>
              Pokedex
            </Text>
          )}
          data={simplePokemonList}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loadContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 15,
    marginTop: 65,
  },
});
