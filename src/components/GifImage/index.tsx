import React, { FC } from 'react';
import { Gif } from 'models';
import { Link } from 'react-router-dom';


const GifImage: FC<Gif> = (props) => {
  const { id, title, url } = props;
  return (
    <Link to={`/Details/${id}`}>
      <img height={200} style={{ objectFit: "cover", paddingRight: "5px" }} alt={title} src={decodeURI(url)} loading="lazy" />
    </Link>
  );
};

export default GifImage;
