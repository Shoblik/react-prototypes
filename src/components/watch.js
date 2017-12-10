import React, {Component} from 'react';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
        }
        //wtf do these do
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.startInt = null;
    }

    tick() {
        this.setState({
            time: this.state.time + 1,
        });
    }

    handleStartClick() {
        this.startInt = setInterval(() => this.tick(), 1);
    }

    handleStopClick() {
        clearInterval(this.startInt);
    }
    handleResetClick() {
        this.setState({
            time: this.state.time = 0,
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.time} milliseconds have passed</h1>
                <div className='buttonDiv'>
                    <button className='btn btn-success' onClick={this.handleStartClick}>Start</button>
                    <button className='btn btn-danger' onClick={this.handleStopClick}>Stop</button>
                    <button className='btn btn-primary' onClick={this.handleResetClick}>Reset</button>
                </div>
            </div>
        )
    }
}


export default Stopwatch;