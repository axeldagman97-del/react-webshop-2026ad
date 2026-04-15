import React from "react";
//Skapa klasskomponent
class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0, isRunning:false
        };
        this.timerID = null;
    }

    //Starta timern
    startTimer = () => {
        if(!this.state.isRunning) {
            this.setState({isRunning: true});
            this.timerID = setInterval (() => {
                this.setState(prevState => ({
                    seconds: prevState.seconds + 1
                }));
            }, 100);
        }
    };

    //Stoppa timern
    stopTimer = () => {
        clearInterval(this.timerID);
        this.setState({isRunning: false})
    };

    resetTimer = () => {
        this.stopTimer();
        this.setState({ seconds:0 });
    };

componentWillUnmount() {
    this.stopTimer
}


    render() {
        return (
            <div> 
                <h1>Timer: {this.state.seconds} </h1>
                <p> seconds since start {this.state.seconds}</p>

                <button onClick={this.startTimer} disabled={this.state.isRunning}> Starta Timer</button>
                <button onClick={this.stopTimer} disabled={!this.state.isRunning}> Stoppa Timer</button>
                <button onClick={this.resetTimer} > Nollställ Timer</button>

            </div>
        );
    }

}

export default Timer;
