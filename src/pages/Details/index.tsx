import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Details: FC = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Detalles</h3>
      <p>
        ID: {id}
      </p>
    </>
  )
}

export default Details;
