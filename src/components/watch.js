import React, {Component} from 'react';
import Time from './format_timer';
import Orbit from './orbit';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            action: 'stopped',
            start: null,
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
            action: 'running',
        });
    }

    handleStartClick() {
        const {start, time} = this.state;
        var newStart = new Date().getTime();


        if (start === null) {
           var noTimerRunning = true;
        } else {
            var noTimerRunning = false;
        }

        this.setState({
            start: newStart,
        });

        if (noTimerRunning) {
            this.startInt = setInterval(() => this.tick(), 10);
        }
    }

    handleStopClick() {
        clearInterval(this.startInt);
        this.setState({
            action: 'stopped',
            start: null
        });
    }
    handleResetClick() {
        this.setState({
            time: this.state.time = 0,
            action: 'reset'
        });
    }
    render(){
        return (
            <div>
                <Orbit elapsed = {this.state.time} start = {this.state.start} movement = {this.state.action}/>
                <h1><Time elapsed = {this.state.time}/></h1>
                <h4>{this.state.action}</h4>
                <div className='buttonDiv'>
                    <button className='btn btn-outline-success' onClick={this.handleStartClick}>Start</button>
                    <button className='btn btn-outline-danger' onClick={this.handleStopClick}>Stop</button>
                    <button className='btn btn-outline-primary' onClick={this.handleResetClick}>Reset</button>
                </div>
            </div>
        )
    }
}


export default Stopwatch;