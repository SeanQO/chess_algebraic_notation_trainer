const Header = (props) => {
    return(
        <div className="header">
            <div id="divSpace">
                {props.minutes} : {props.seconds}
            </div>
            <div id="divSpace">
                <button className="button" onClick={props.changeGameState}>
                    {props.nextGameState}
                </button>
            </div>
        </div>
    )
}

export default Header