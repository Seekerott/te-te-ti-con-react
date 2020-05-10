import React, { useState} from 'react';
import {calculateWinner} from '../helpers.js';
import Board from './Board';

const style = {
    width: '200px',
    margin: '20px auto'
}

function Game(){

    const [history, setHistoty] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepnumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    function handleClick(i){
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares= [...current];

        if(winner || squares[i]) return;

        squares[i] = xIsNext ? 'X' : 'O';
        setHistoty([...timeInHistory, squares]);
        setStepnumber(timeInHistory.length);
        setXisNext(!xIsNext);
    }

    function jumpTo(step){
        setStepnumber(step);
        setXisNext(step % 2=== 0)
    }

    function renderMoves(){
        return(
            history.map((_step, move) => {
                const destination = move ? `Go to move #${move}` : `Go to Start New Game`;
                return(
                    <li key={move}>
                        <button onClick ={()=> jumpTo(move)} >
                        {destination}
                        </button>
                    </li>
                ) 
            })
        )

    }
    
    return(
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
        <div style={style} >
            <p>{winner ? 'Winner: ' + winner : 'Next player is ' + (xIsNext ? 'X' : 'O')}</p>
            {renderMoves()}
        </div>
        </>
    )
} 

export default Game;

