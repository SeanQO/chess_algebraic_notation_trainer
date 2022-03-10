const Header = (props) => {
    return(
        <div className="header">
            <ul>
                <div>
                    {props.minutes} : {props.seconds}
                </div>
                <button onClick={props.changeGameState} value={props.nextGameState}>
                </button>
            </ul>
        </div>
    )
}

export default Header