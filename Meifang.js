import React from 'react';
import ReactDOM from 'react-dom';

function formatTime(time) {
  return 'remaining time: ' + time + ' seconds';
}

const App = () => {
  return <CountDownClock func={ formatTime } />
}

class CountDownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 10, display: null};
  }
  componentDidMount() {
    this.onInterval()
  }
  onInterval (){
    // for every sec, set new time state remaining
    setInterval(()=> this.countDown(), 1000); 
  }

  countDown = () => {
    // if remaining time less than 0, stop.
    if (this.state.time < 0) {
      clearInterval(this.onInterval)
    } else {
    // continue counting down by 1
      this.setState({
        time: this.state.time -1,
        display: this.props.func(this.state.time) 
      });
    }
  }

  render () {
    return <div>{this.state.display}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))