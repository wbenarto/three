import React from 'react';

const Card = ({id, title, height}) => {
  return <div className='bg-green-100' style={{height: `${height}px`
}}>{title} - </div>;
};

export default Card;