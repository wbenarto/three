import React, {useState, useEffect} from 'react';
import Grid from './Grid';

const TicTacToe = () => {

    const [grid, setGrid] = useState([[null,null,null],[null, null, null],[null, null, null]])
    const [player, setPlayer] = useState(1)
    const [count, setCount] = useState(0)
   
    const checkBoard = () => {
        console.log(count,'player :', player)
        if (count <= 2) return

        if (grid[0][0] === grid[1][0] && grid[0][0] == grid[2][0] && grid[0][0] !== null) {
            alert(`Player ${player === 1 ? 2 : 1} wins!`)
        } else if (grid[0][1] === grid[1][1] && grid[0][1] == grid[2][1] && grid[0][1] !== null) {
            alert(`Player ${player  === 1 ? 2 : 1} wins!`)
        } else if (grid[0][2] === grid[1][2] && grid[0][2] == grid[2][2] && grid[0][2] !== null) {
            alert(`Player ${player  === 1 ? 2 : 1} wins!`)
        } else if (grid[0][0] === grid[0][1] && grid[0][0] == grid[0][2] && grid[0][0] !== null) {
            alert(`Player ${player  === 1 ? 2 : 1} wins!`)
        } else if (grid[1][0] === grid[1][1] && grid[1][0] == grid[1][2] && grid[1][0] !== null) {
            alert(`Player ${player  === 1 ? 2 : 1} wins!`)
        } else if (grid[2][0] === grid[2][1] && grid[2][0] == grid[2][2] && grid[2][0] !== null) {
            alert(`Player ${player  === 1 ? 2 : 1} wins!`)
        } else if (grid[0][0] === grid[1][1] && grid[0][0] == grid[2][2] && grid[0][0] !== null) {
            alert(`Player ${player  === 1 ? 2 : 1} wins!`)
        } else if (grid[2][0] === grid[1][1] && grid[2][0] == grid[0][2] && grid[2][0] !== null) {
            alert(`Player ${player  === 1 ? 2 : 1} wins!`)
        } else if (count === 9) {
            alert('NOBODY WINS')
        }
    
        
    }

    useEffect(()=>{
        checkBoard()
    }, [count])
   

    const handleClick = (i, j) => {
        console.log("clicked", i, j)
       if (grid[i][j] == null) {
        
        if (player === 1) {
            const shallowGrid = grid
            shallowGrid[i][j] = 'x'
            setGrid(shallowGrid)
            setCount(count + 1)
            setPlayer(2)
            
            
        } else if (player == 2) {
            const shallowGrid = grid
            shallowGrid[i][j] = 'o'
            setGrid(shallowGrid)
            setCount(count + 1)
            setPlayer(1)
    
        }
       } else {
        alert('invalid move')
       }

    }

    const handleStart = () => {
        console.log('handle start')
        setGrid([[null,null,null],[null, null, null],[null, null, null]])
       
        setCount(0)
        setPlayer(1)
    }

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <p>Player {player} turn!</p>
            <button className='bg-blue-100 px-10 py-4 mt-4 rounded-xl text-black' onClick={handleStart}>Start Game</button>
            <div className='bg-blue-100 my-10 gap-2 flex rounded-lg'>
                {grid.map((e,i) => {

                    return (
                        <div key={i} className='flex flex-col gap-2'>
                            {e.map((tile , j) => {

                                return <Grid key={j} value={tile} onClick={()=>handleClick(i,j)}/> 
                            })}
                        </div>

                    )
                })}
            </div>  
        </>
    )
}

export default TicTacToe;