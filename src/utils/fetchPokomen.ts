import axios from 'axios';

export const loadPokemon = async (url: string) => {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
