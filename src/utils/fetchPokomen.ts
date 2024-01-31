import axios, { AxiosResponse } from 'axios';
import { PokemonGroupType } from './types';

export const loadPokemon = async (url: string): Promise<PokemonGroupType> => {
  const response = await axios.get(url);
  return response.data;
};
