import { useEffect, useState } from 'react';
import { getGifsByKeyword } from 'services';
import { Gif } from 'models';

const useGetGifs = (keyword: any = null) => {

  const keywordToUse = keyword || localStorage.getItem('lastKeyword');

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getGifsByKeyword(keywordToUse).then((data) => {
      setGifs(data);
      setTimeout(() => setLoading(false), 500);
      localStorage.setItem('lastKeyword', keyword)
    });
  }, [keyword, keywordToUse, setGifs]);

  return { loading, gifs }
}

export default useGetGifs;
