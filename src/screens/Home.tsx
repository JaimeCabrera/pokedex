import React from 'react';
import {
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {globalStyles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';

export const Home = () => {
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <SafeAreaView>
        <Image
          source={require('../assets/pokebola.png')}
          style={globalStyles.pokebolaBg}
        />

        <View style={styles.flatListContainer}>
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
            // para el infinite scroll
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => (
              // cuando llegue al final oculta el indicador de carga
              <ActivityIndicator color={'blue'} size={40} />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: 'center',
  },
  title: {
    paddingBottom: 15,
    marginTop: 10,
  },
});
