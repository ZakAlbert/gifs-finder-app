import React, { FC } from 'react';
import { Gif } from 'models';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  gift: {
    height: '50%',
  },
  img: {
    height: 'inherit',
    width: '50%',
    objectFit: 'cover',
    verticalAlign: 'top'
  }
});

const GifImage: FC<Gif> = (props) => {
  const { title, url } = props;
  const classes = useStyles();
  return <picture className={classes.gift}>
    <img className={classes.img} alt={title} src={decodeURI(url)} loading="lazy" />
  </picture>
};

export default GifImage;
