import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';

import { CardPokemons } from '../components/CardPokemons';

import { ModalPokemon } from '../components/ModalPokemon';
import {
  URL_ABILITY_TEXT,
  URL_LIMIT_NUMBER,
  URL_LIMIT_TEXT,
  URL_OFFSET_NUMBER,
  URL_OFFSET_TEXT,
  URL_POKEMON,
} from '../utils/constans';
import { loadPokemon } from '../utils/fetchPokomen';
import { IsLoadingInfo } from '../components/isLoadingInfo';
import { IsErrorInfo } from '../components/isErrorInfo';
import { ButtonLoadSX } from '../utils/style';
//importy ??
import { useMutation } from 'react-query';
import { useQuery } from 'react-query';

export const HomePageZestaw6 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [loadedClickedPokemon, setLoadedClickedPokemon] = useState('');
  const [loadedPokemonsNumber, setPokemonsNumber] = useState(0);
  const { isOpen, onClose, onOpen } = useDisclosure();

  // nie wymaga komentarza, scrolluj dalej
  const url = `${URL_POKEMON}${URL_ABILITY_TEXT}${URL_LIMIT_TEXT}${
    URL_LIMIT_NUMBER + loadedPokemonsNumber
  }${URL_OFFSET_TEXT}${URL_OFFSET_NUMBER + loadedPokemonsNumber}`;

  // otypowanie tego?
  //jak ogarnac, zeby ladowal kolejne 20 a nie ciagle od nowa?
  const {
    data: loadedPokemons,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['pokemonData', loadedPokemonsNumber],
    queryFn: () => loadPokemon(url),
  });

  // hook?
  const handleMorePokemons = () => {
    setPokemonsNumber((num) => num + URL_LIMIT_NUMBER);
  };
  // hook?
  const handleClickedPokemon = async (url: string) => {
    setLoadedClickedPokemon(url);
  };

  if (isLoading) return <IsLoadingInfo />;
  if (error) return <IsErrorInfo />;

  return (
    <>
      <Flex alignItems='center'>
        <Box>
          <Text>POKEMON</Text>
        </Box>
        <Spacer />
        <Button fontSize='25px' onClick={toggleColorMode}>
          {colorMode === 'light' ? <Icon as={MdDarkMode} /> : <Icon as={MdOutlineDarkMode} />}
        </Button>
      </Flex>
      <Box>
        <ButtonGroup onClick={onOpen}>
          <Flex gap='5px' wrap='wrap'>
            {/* //typy */}
            {loadedPokemons.results.map((item) => {
              return (
                <Box key={item.url + Math.floor(Math.random() * 100000)}>
                  <CardPokemons handleClickedPokemon={handleClickedPokemon} item={item} />
                </Box>
              );
            })}
          </Flex>
        </ButtonGroup>
      </Box>
      <Flex justifyContent='center'>
        {!isLoading ? (
          <>
            <Button sx={ButtonLoadSX} onClick={handleMorePokemons}>
              -- load more --
            </Button>
          </>
        ) : (
          <Text>loading...</Text>
        )}
      </Flex>
      {
        <ModalPokemon
          isOpen={isOpen}
          loadedClickedPokemon={loadedClickedPokemon}
          onClose={onClose}
        />
      }
    </>
  );
};
