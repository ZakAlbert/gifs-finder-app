import { Gif } from 'models';

const API_KEY = 'PZJZkyvh3I2OY7gzoF89tm3xRG6sOdip';
const API_URL = 'https://api.giphy.com/v1';

const getGifsByKeyword = async (keywork: string): Promise<Gif[]> => {
  return fetch(`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keywork}&limit=10`)
    .then(response => response.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        return data.map(item => {
          const { id, title, images } = item;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });
      }
      return [];
    });
};

export { getGifsByKeyword };
