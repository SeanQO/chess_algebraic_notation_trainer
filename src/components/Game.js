import Header from './Header'
import Board from './Board'

const Game = () => {

    function handleStateChange() {
        console.log("CLICK");
    }

    return (
        <div className="game">
            <Header minutes="01" seconds="00" nextGameState="START" changeGameState={handleStateChange}></Header>
            <Board/>
        </div>
    )
}

export default Game