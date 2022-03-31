import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonapi';
import {
  PokemonResponsePaginated,
  Result,
  SimplePokemon,
} from '../interfaces/pokemoninterface';

export const usePokemonSearch = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const [isFetching, setIsFetching] = useState(true);
  const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=1200';

  const loadPokemons = async () => {
    // setIsFetching(true);
    const res = await pokemonApi.get<PokemonResponsePaginated>(urlApi);
    mapPokemonList(res.data.results);
  };

  // funcion para transformar el resultado de la api
  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        name,
        picture,
      };
    });
    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isFetching,
  };
};
