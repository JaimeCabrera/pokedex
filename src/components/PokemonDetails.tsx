import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonResponseFull} from '../interfaces/pokemoninterface';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonResponseFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    // el absolutefillobject para ocupar toda la pantalla para elk scrollview
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* types y peso */}
        <Text style={styles.title}>Types</Text>
        <View style={styles.typeList}>
          {pokemon.types.map(({type}) => {
            return (
              <Text key={type.name} style={styles.typeText}>
                {type.name}
              </Text>
            );
          })}
        </View>
        {/* peso */}
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.typeText}>{pokemon.weight} Kg</Text>
      </View>
      {/* srpites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView
        style={{}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.imgSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.imgSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.imgSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.imgSprites}
        />
      </ScrollView>
      {/* habilities */}
      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={styles.typeList}>
          {pokemon.abilities.map(({ability}) => {
            return (
              <Text key={ability.name} style={styles.typeText}>
                {ability.name}
              </Text>
            );
          })}
        </View>
      </View>
      {/* Movimientos */}
      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={styles.moveList}>
          {pokemon.moves.map(({move}) => {
            return (
              <Text key={move.name} style={styles.typeText}>
                {move.name}
              </Text>
            );
          })}
        </View>
      </View>
      {/* stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats </Text>
        <View style={styles.statList}>
          {pokemon.stats.map((stat, i) => {
            return (
              <View key={stat.stat.name + i} style={styles.statContent}>
                <Text style={styles.statTitle}>{stat.stat.name}</Text>
                <Text style={styles.statSubtitle}>{stat.base_stat}</Text>
              </View>
            );
          })}
        </View>
        {/* sproite final */}
        <View style={styles.spriteContainer}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.imgSprites}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  content: {
    marginTop: '75%',
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
  },
  typeList: {
    flexDirection: 'row',
  },
  typeText: {
    marginRight: 10,
    fontSize: 20,
  },
  imgSprites: {
    width: 125,
    height: 125,
  },
  moveList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  statList: {
    flexWrap: 'wrap',
  },
  statContent: {
    width: '100%',
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  statTitle: {
    marginRight: 10,
    fontSize: 20,
    flex: 3,
    textTransform: 'capitalize',
  },
  statSubtitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  spriteContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
});
