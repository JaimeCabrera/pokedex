import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  KeyboardAvoidingViewBase,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {globalStyles} from '../theme/appTheme';
import {SimplePokemon} from '../interfaces/pokemoninterface';

const WindowWidth = Dimensions.get('window').width;

export const Search = () => {
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setPokemonFiltered([]);
    }
    if (searchTerm.length > 1) {
      if (isNaN(Number(searchTerm))) {
        // aplicar filtro
        setPokemonFiltered(
          simplePokemonList.filter(poke =>
            poke.name.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        );
      } else {
        // aplicar filtro
        const pokemonById = simplePokemonList.find(
          poke => poke.id === searchTerm,
        );
        // si el resultado no tiene nada retornar un array vacio
        setPokemonFiltered(pokemonById ? [pokemonById] : []);
      }
    }
  }, [searchTerm]);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View style={styles.searchContainer}>
      <SafeAreaView onTouchStart={() => Keyboard.dismiss()}>
        <SearchInput
          onDebounce={value => setSearchTerm(value)}
          style={{
            position: 'absolute',
            zIndex: 999,
            top: 20,
            opacity: 0.94,
            width: WindowWidth,
          }}
        />
        <FlatList
          ListHeaderComponent={() => (
            <Text
              style={{
                ...globalStyles.globalTitle,
                ...globalStyles.globalMarginHorizontal,
                ...styles.title,
              }}>
              {searchTerm.length > 0
                ? `Resultados: ${searchTerm}`
                : 'Todos los pokemons'}
              {/* {searchTerm} */}
            </Text>
          )}
          data={pokemonFiltered}
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
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  loadContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 20,
    marginTop: 70,
    // backgroundColor: 'red',
  },
});
