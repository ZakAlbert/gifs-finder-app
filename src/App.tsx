import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { getGifsByKeyword } from 'services';
import { Gif } from 'models';
import { GifsList } from 'components';


const App: FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getGifsByKeyword('gatos').then((data) => {
      setGifs(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Gifs Finder</h1>
      <div>
        {
          loading ?
            <h3>CARGANGO</h3> :
            <GifsList gifs={gifs} />
        }
      </div>
    </div>
  );
}

export default App;
