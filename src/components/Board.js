import React, { useState } from 'react';

const Board = (props) => {
    const [ x, setX ] = useState('');
    setX(["a", "b", "c", "d", "e", "f", "g", "h"]);
    const [ y, setY ] = useState('');
    setY(["8","7","6","5","4","3","2","1"]);

    function getBoard(){
        this.y.forEach(xValue => {
          this.x.forEach(yValue => {
            this.board.push(
              <div id="tile">[{props.y}{props.x}]</div>
            );
          });
        });
        return <div id="board">{this.board}</div>
    }

    return(
        this.getBoard()
    )
}

export default Board