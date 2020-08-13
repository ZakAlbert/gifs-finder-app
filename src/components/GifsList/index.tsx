import React, { FC } from 'react';
import { Gif } from 'models';
import { GifImage } from 'components';

interface IGifsList {
  gifs: Gif[]
}

const GifsList: FC<IGifsList> = (props) => {
  const { gifs } = props;
  return <div>
    {
      gifs.map(item => {
        return <GifImage key={item.id} {...item} />;
      })}
  </div>
};

export default GifsList;
