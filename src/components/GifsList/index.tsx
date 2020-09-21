import React, { FC } from 'react';
import { Gif } from 'models';
import { GifImage } from 'components';
import { Box } from '@material-ui/core';
// import { useMedia } from 'hooks';

interface IGifsList {
  gifs: Gif[]
}

const GifsList: FC<IGifsList> = (props) => {
  const { gifs } = props;

  // const columnCount = useMedia<number>(
  //   ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
  //   [5, 4, 3],
  //   2
  // );

  return <>

    <Box display="flex" flexWrap="wrap"  >
      {
        gifs.map(item => {
          return <GifImage
            key={item.id}
            id={item.id}
            title={item.title}
            url={item.url}
          />;
        })
      }
    </Box>
  </>
};

export default GifsList;
