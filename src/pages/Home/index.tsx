import React, { FC } from 'react';
import { GifsList } from 'components';
import { useGetGifs } from 'hooks';
import { CircularProgress, Box } from '@material-ui/core';

const Home: FC = () => {

  const { loading, gifs } = useGetGifs();

  return (
    <>
      {
        loading ?
          <CircularProgress variant="indeterminate" color="inherit" /> :
          <GifsList gifs={gifs} />
      }
    </>
  );
};

export default Home;
