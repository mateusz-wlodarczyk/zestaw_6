import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { ItemType } from '../utils/types';

export const CardPokemons = ({
  handleClickedPokemon,
  item,
}: {
  handleClickedPokemon: (url: string) => void;
  item: ItemType;
}) => {
  return (
    <Button key={item.url} onClick={() => handleClickedPokemon(item.url)}>
      <Text>{item.name}</Text>
    </Button>
  );
};
