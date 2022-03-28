import React from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {globalStyles} from '../theme/appTheme';

export const Home = () => {
  return (
    <>
      <SafeAreaView>
        <Image
          source={require('../assets/pokebola.png')}
          style={globalStyles.pokebolaBg}
        />
        <Text
          style={[
            globalStyles.globalTitle,
            globalStyles.globalMarginHorizontal,
          ]}>
          Pokedex
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {},
});
