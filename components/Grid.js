import React from 'react';

const Grid = ({value, onClick}) => {
    

    return (
        <div onClick={onClick} className='text-black text-xl w-[150px] h-[150px] bg-red-300 rounded-xl flex justify-center items-center'>
            {value} 
        </div>
    )
}

export default Grid;