import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemoninterface';
import {Image} from 'react-native';
import {FadeInImage} from './FadeInImage';
import {useImageColors} from '../hooks/useImageColors';
import {useNavigation} from '@react-navigation/native';

const windowwidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const {bgColor, secondaryColor} = useImageColors(pokemon.picture);
  const navigator = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigator.navigate('Pokemon', {
          simplePokemon: pokemon,
          color: secondaryColor,
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowwidth * 0.45,
          backgroundColor: bgColor,
        }}>
        {/* nombre del pokemon y id */}
        <View>
          <Text style={styles.pokemonName}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>
        {/* imagen del pokemon */}
        <View style={styles.pokebolaContainer}>
          <Image
            style={styles.pokebola}
            source={require('../assets/pokebola-blanca.png')}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    width: 160,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  pokemonName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'center',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
});
