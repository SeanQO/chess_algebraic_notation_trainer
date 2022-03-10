import Header from './Header'

const Game = () => {

    function handleStateChange() {
        console.log("CLICK");
    }

    return (
        <div className="game">
            <Header minutes="01" seconds="00" nextGameState="START" changeGameState={handleStateChange}></Header>
        </div>
    )
}

export default Game