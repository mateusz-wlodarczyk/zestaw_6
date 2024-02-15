import { useQuery } from 'react-query';
import { loadPokemon } from '../utils/fetchPokomen';

export const QUERY_KEYS = {
  pokemonSingleDetails: 'pokemonDataSingleDetail',
};

export const useGetClickedPokemon = (loadedClickedPokemon: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.pokemonSingleDetails, loadedClickedPokemon],
    queryFn: () => loadPokemon(loadedClickedPokemon),
  });
};
