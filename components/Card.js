import React from 'react';

const Card = ({id, title, height}) => {
  return <div className='bg-green-100 flex-1 gap-4 flex-col ' style={{height: `${height}px`
}}>{title}</div>;
};

export default Card;