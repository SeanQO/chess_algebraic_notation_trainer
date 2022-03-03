import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = "ready";
  }

  getState(){
    return this.state
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cicle: 59, seconds: 0, minutes: 1};
  }

  tick() {
    if (Game.getState() == "ready" || Game.getState() == "finished") {
      if (this.state.minutes > 0) {
        this.setState(state => ({
          seconds: 59,
          minutes: state.minutes - 1
        }));
      }
    }
    
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {this.state.minutes} : {this.state.seconds}
      </div>
    );
  }
}

class Header extends React.Component {
  
  getheader(){
    return <div id='header'><Timer /></div>
  }

  render() {
    return (
      this.getheader()
    )

  }

}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.board = [];
    this.y = ["8","7","6","5","4","3","2","1"];
    this.x = ["a", "b", "c", "d", "e", "f", "g", "h"];
  }

  getBoard(){
    this.y.forEach(xValue => {
      this.x.forEach(yValue => {
        this.board.push(
          <button id="tile">[{yValue}{xValue}]</button>
        );
      });
    });
    return <div id="board">{this.board}</div>
  }

  render() {
    return (
      this.getBoard()
    )

  }

}

ReactDOM.render(
  <div>
    <div>
      <Header />
    </div>
    <div id="mainPage">
    <Board />  
    </div>
  </div>,
  document.getElementById('root')
);
