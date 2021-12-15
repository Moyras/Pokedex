import axios from 'axios';
import {useEffect, useRef, useState} from 'react';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterfases';

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemon = async () => {
    setIsLoading(true);
    const res = await axios.get<PokemonPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current = res.data.next;
    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');

      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {name, id, url, picture};
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };
  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    simplePokemonList,
    isLoading,
    loadPokemon,
  };
};
