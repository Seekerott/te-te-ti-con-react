import React from 'react';

const style= {
    background: 'red',
    border: '2px solid darkred',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

function Square({value, onClick}){
    return(
    <button style ={style} onClick={onClick}>
        {value}
    </button>
    )
}

export default Square;