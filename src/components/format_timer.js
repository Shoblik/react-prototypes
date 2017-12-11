import React, {Component} from 'react';

class FormatTime extends Component {
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
        var {elapsed} = nextProps;


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


    render() {
        var {hour, min, sec, ms} = this.state;

        return(
            <div>
                <h1 className = 'digitContainer'><div className='digit'>{hour}</div>   :   <div className='digit'>{min}</div>   :   <div className='digit'>{sec}</div>   .   <div className='digit'>{ms}</div></h1>
                <div>
                    {this.props.time}
                </div>
            </div>
            )
    }
}
export default FormatTime;
