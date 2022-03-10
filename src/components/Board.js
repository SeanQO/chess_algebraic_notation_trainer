import React, { useState } from 'react';
const Board = (props) => {
    const grid = []
    const x = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const y = ["8","7","6","5","4","3","2","1"]

    y.forEach(yVal => {
        x.forEach(xVal =>{
            grid.push(
                <div id="tile">[{yVal}{xVal}]</div>
            )
        })
    })

    return(
        <div className='board'>
            {grid}
        </div>
    )
}

export default Board