import React, {Component} from 'react';

var startOrbit = false
var reset = false;

class Orbit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0,
        }
    }

    componentWillReceiveProps(nextProps) {
        startOrbit = true;
        var {elapsed} = nextProps;
        var {start} = nextProps;
        var {movement} = nextProps;

        if (start === null) {
            startOrbit = false;
        }

        if (movement === 'reset') {
            console.log('working');
            startOrbit = false;
            reset = true;
        }



        const sec = elapsed / 100;
        const min = sec / 60;

        let hours = Math.floor(min / 60);
        let mins = Math.floor(min % 60);
        let secs = Math.floor(sec % 60);
        let msVar = Math.floor(elapsed % 100);

        let timeArr = [hours, mins, secs, msVar];

        for (let i = 0; i < timeArr.length; i++) {
            if (timeArr[i] < 10) {
                timeArr[i] = '0' + timeArr[i];
            }
        }

        this.setState({
            hour: timeArr[0],
            min: timeArr[1],
            sec: timeArr[2],
            ms: timeArr[3]
        });
    }
    componentDidUpdate() {
        reset = false;
    }
    initiateOrbit(time) {

        if (startOrbit && reset === false) {
            return(
                'initiate'+time+'Orbit'
            )
        }
        else if (reset) {
            console.log('val', reset)
            return(
                ' '
            )
        }
        else {
            return(
                'initiate'+time+'Orbit' + ' ' + 'pause'+time+'Orbit'
            )
        }
    }

    render() {
        return(
            <div className='orbitContainer'>
                <div className='center'><p>{this.state.ms}</p></div>
                <div className={'secondsOrbit' + ' ' + this.initiateOrbit('Seconds')}><p>{this.state.sec}</p></div>
                <div className={'minutesOrbit' + ' ' + this.initiateOrbit('Minutes')}><p>{this.state.min}</p></div>
                <div className={'hoursOrbit' + ' ' + this.initiateOrbit('Hours')}><p>{this.state.hour}</p></div>
            </div>
        );
    }
}

export default Orbit;