import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = "ready";
  }

  handleClick() {
    this.setState({state: "running"});
  }

  renderTimer(){
    if (this.state == "ready") {
      return "1 : 00"
    }else{
      return <Timer />
    }
    
  }

  render() {
    return (
      <div>
        <div id='header'>
          <div>{this.renderTimer()}</div>
          <button onClick={() => this.handleClick()} > START</button>
        </div>
        <div id="mainPage"><Board /></div>
      </div>
    );
  }
}


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cicle: 59, seconds: 99, minutes: 99};
  }

  tick() {
    this.setState(state => ({
      seconds: this.state.seconds - 1,
      minutes: this.state.minutes - 1
    }));
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
  <div><Game /></div>,
  document.getElementById('root')
);
