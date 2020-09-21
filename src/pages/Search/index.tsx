import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { GifsList } from 'components'
import { useGetGifs } from 'hooks';
import { Typography, CircularProgress } from '@material-ui/core';



const Search: FC = () => {
  const { keyword } = useParams();
  const { loading, gifs } = useGetGifs(keyword);

  return (
    <>
      {
        loading ?
          <CircularProgress variant="indeterminate" color="inherit" /> :
          <div>
            <Typography variant="h5" gutterBottom>
              Busqueda: {keyword}
            </Typography>
            <GifsList gifs={gifs} />
          </div>
      }
    </>
  );
}

export default Search;
