import React from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {globalStyles} from '../theme/appTheme';

export const Home = () => {
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <SafeAreaView>
        <Image
          source={require('../assets/pokebola.png')}
          style={globalStyles.pokebolaBg}
        />

        <FlatList
          data={simplePokemonList}
          renderItem={({item}) => (
            <FadeInImage style={styles.image} uri={item.picture} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          // para el infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => (
            // cuando llegue al final oculta el indicador de carga
            <ActivityIndicator color={'blue'} size={40} />
          )}
        />

        {/* <Text
          style={[
            globalStyles.globalTitle,
            globalStyles.globalMarginHorizontal,
          ]}>
          Pokedex
        </Text> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
