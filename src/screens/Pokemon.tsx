import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigation';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemonDetails} from '../hooks/usePokemonDetails';
import {PokemonDetails} from '../components/PokemonDetails';

interface Props extends NativeStackScreenProps<RootStackParams, 'Pokemon'> {}

export const Pokemon = ({route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;
  const {isLoading, pokemon} = usePokemonDetails(id);
  return (
    <View style={styles.container}>
      {/* header */}
      <View
        style={{
          ...styles.header,
          backgroundColor: color,
        }}>
        {/* pokemon name */}
        <Text style={styles.pokemonName}>
          {name + '\n'} #{id}
        </Text>
        {/* pokebola blanca */}
        <Image
          style={styles.pokebolaBg}
          source={require('../assets/pokebola-blanca.png')}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
      {/* detalles y loadign */}
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size="large" />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '45%',
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 5,
  },
  pokemonName: {
    alignSelf: 'flex-start',
    left: 20,
    top: 50,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  pokebolaBg: {
    width: 250,
    height: 250,
    bottom: -25,
    opacity: 0.8,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -35,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
