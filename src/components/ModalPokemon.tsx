import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import { loadPokemon } from '../utils/fetchPokomen';
import { useQuery } from 'react-query';
import { IsLoadingInfo } from './isLoadingInfo';
import { IsErrorInfo } from './isErrorInfo';
import { useGetClickedPokemon } from '../utils/queries';

export const ModalPokemon = ({
  isOpen,
  loadedClickedPokemon,
  onClose,
}: {
  isOpen: boolean;
  loadedClickedPokemon: string;
  onClose: () => void;
}) => {
  const { data, isLoading, error } = useGetClickedPokemon(loadedClickedPokemon);

  if (isLoading) return <IsLoadingInfo />;
  if (error) return <IsErrorInfo />;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>#{data?.id}</ModalHeader>
        <ModalCloseButton>X </ModalCloseButton>
        <ModalBody>
          <Text>name: {data?.name}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
