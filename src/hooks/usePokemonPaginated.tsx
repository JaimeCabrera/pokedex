import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonapi';
import {
  PokemonResponsePaginated,
  Result,
  SimplePokemon,
} from '../interfaces/pokemoninterface';

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=20');

  const loadPokemons = async () => {
    setIsLoading(true);
    const res = await pokemonApi.get<PokemonResponsePaginated>(
      nextPageUrl.current,
    );
    nextPageUrl.current = res.data.next;
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
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isLoading,
    loadPokemons,
  };
};
