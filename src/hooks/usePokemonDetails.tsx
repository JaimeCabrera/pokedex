import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonapi';
import {PokemonResponseFull} from '../interfaces/pokemoninterface';

export const usePokemonDetails = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonResponseFull>(
    {} as PokemonResponseFull,
  );

  const loadPokemon = async () => {
    const res = await pokemonApi.get<PokemonResponseFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
